from models import Base, Teachers, Students, Groups, Subjects, StudentGroup, SubjectGroupTeacher, HomeWorks, HomeWorksSent, Materials

import os
from dotenv import load_dotenv

from threading import current_thread

from sqlalchemy import select, delete, create_engine
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm import sessionmaker

load_dotenv()

db_host = os.getenv('POSTGRES_HOST')
db_port = os.getenv('POSTGRES_PORT')
db_user = os.getenv('POSTGRES_USER')
db_pass = os.getenv('POSTGRES_PASSWORD')
db_name = os.getenv('POSTGRES_DB')
# create_tables = os.getenv('CREATE_TABLES', False)
create_tables = 'True'

_engines = dict()

def get_local():
    thread = current_thread()
    key = str(id(thread))
    if key not in _engines.keys():
        _engine = create_engine(
            url=f"postgresql+psycopg2://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}",
            echo=False,
        )
        _sessionmaker = sessionmaker(_engine)
        _engines[key] = [_engine, _sessionmaker]
    return _engines[key]

class DB:
    @staticmethod
    def create_tables() -> None:
        engine = get_local()[0]
        with engine.begin() as conn:
            Base.metadata.drop_all(conn) # for tests
            Base.metadata.create_all(conn)

    # ------------------------------
    # adding infromation to database
    #-------------------------------

    @staticmethod
    def add_teacher(new_login: str, new_password: str, new_name: str, new_surname: str, new_patronymic: str,) -> bool:
        with get_local()[1]() as session:
            if session.get(Teachers, new_login) != None:
                session.flush()
                session.commit()
                return False
            else:
                new_user = Teachers(login=new_login, password=new_password, name=new_name, surname=new_surname, patronymic=new_patronymic)
                session.add(new_user)
                session.flush()
                session.commit()
                return True

    @staticmethod
    def add_student(new_login: str, new_password: str, new_name: str, new_surname: str, new_patronymic: str,) -> bool:
        with get_local()[1]() as session:
            if session.get(Students, new_login) != None:
                session.flush()
                session.commit()
                return False
            else:
                new_user = Students(login=new_login, password=new_password, name=new_name, surname=new_surname, patronymic=new_patronymic)
                session.add(new_user)
                session.flush()
                session.commit()
                return True

    @staticmethod
    def add_group(group_name: str) -> None:
        with get_local()[1]() as session:
            new_group = Groups(name=group_name)
            session.add(new_group)
            session.flush()
            session.commit()

    @staticmethod
    def add_subject(subject_name: str) -> None:
        with get_local()[1]() as session:
            new_subject = Subjects(name=subject_name)
            session.add(new_subject)
            session.flush()
            session.commit()

    @staticmethod
    def add_student_to_group(student_login: str, group_name: str) -> None :
        with get_local()[1]() as session:
            query = (select(Groups.group_id).select_from(Groups)).where(
                Groups.name == group_name)
            result = session.execute(query)
            group = result.scalars().all()[0]

            new_group_member = StudentGroup(student_id = student_login, group_id = group)
            session.add(new_group_member)
            session.flush()
            session.commit()

    @staticmethod
    def add_teacher_to_the_group(teacher_login: str, subject_name: str, group_name: str) -> None:
        with get_local()[1]() as session:
            query = (select(Groups.group_id).select_from(Groups)).where(
                Groups.name == group_name)
            result = session.execute(query)
            group = result.scalars().all()[0]

            new_group_teacher = SubjectGroupTeacher(subject_id = subject_name, teacher_id = teacher_login, group_id = group)
            session.add(new_group_teacher)
            session.flush()
            session.commit()
            

    @staticmethod
    def add_hw(subject_name: str, group_name: str, hw_number: int) -> None:
        with get_local()[1]() as session:
            query = (select(Groups.group_id).select_from(Groups)).where(
                Groups.name == group_name)
            result = session.execute(query)
            group = result.scalars().all()[0]

            new_hw = HomeWorks(group_id = group, subject_id = subject_name, number = hw_number)
            session.add(new_hw)
            session.flush()
            session.commit()
    
    @staticmethod
    def add_sent_hw(student_login: str, subject_name: str, group_name: str, hw_number: int) -> None:
        with get_local()[1]() as session:
            query = (select(Groups.group_id).select_from(Groups)).where(
                Groups.name == group_name)
            result = session.execute(query)
            group = result.scalars().all()[0]


            query = (select(HomeWorks.hw_id).select_from(HomeWorks)).where(
                HomeWorks.group_id == group).where(
                    HomeWorks.subject_id == subject_name).where(
                    HomeWorks.number == hw_number
                )
            result = session.execute(query)
            id = result.scalars().all()[0]

            student = session.get(Students, student_login)

            new_sent_hw = HomeWorksSent(hw_id = id, student_id = student)
            session.add(new_sent_hw)
            session.flush()
            session.commit()

    
    @staticmethod
    def add_material(subject_name: str, lection_title: str, lection_link: str) -> bool:
        with get_local()[1]() as session:
            result = False
            if session.get(Materials, (subject_name, lection_title)) == None:
                new_material = Materials(subject=subject_name, title=lection_title, link=lection_link)
                session.add(new_material)
                result = True
            session.flush()
            session.commit()
        return result
    
    # ----------------------------------
    # deleting infromation from database
    #----------------------------------

    @staticmethod
    def delete_user(user_login: str, is_student: bool) -> None:
        with get_local()[1]() as session:
            if is_student:
                query = (delete(Students).where(Students.login == user_login))
            else:
                query = (delete(Teachers).where(Teachers.login == user_login))

            session.execute(query)
            session.flush()
            session.commit()

    @staticmethod
    def delete_subject(subject_name: str) -> None:
        with get_local()[1]() as session:
            query = (delete(Subjects).where(Subjects.name == subject_name))
            session.execute(query)
            session.flush()
            session.commit()

    def delete_group(group_name: str) -> None:
        with get_local()[1]() as session:
            query = (delete(Groups).where(Groups.name == group_name))
            session.execute(query)
            session.flush()
            session.commit()

    @staticmethod
    def delete_hw(subject_name: str, group_name: str, hw_number: int) -> None:
        with get_local()[1]() as session:
            query = (select(Groups.group_id).select_from(Groups)).where(
                Groups.name == group_name)
            result = session.execute(query)
            group = result.scalars().all()[0]

            query = (delete(HomeWorks).where(HomeWorks.number == hw_number).where(
                HomeWorks.subject_id == subject_name).where(
                    HomeWorks.group_id == group
                ))
            session.execute(query)
            session.flush()
            session.commit()

    @staticmethod
    def delete_material(subject_name: str, lection_title: str) -> None:
        with get_local()[1]() as session:
            query = (delete(Materials).where(Materials.subject == subject_name).where(Materials.title==lection_title))
            session.execute(query)
            session.flush()
            session.commit()
    # ----------------------------------
    # updating infromation from database
    #-----------------------------------

    @staticmethod
    def update_user_password(login:str, new_password: str, is_student: bool) -> None:
        with get_local()[1]() as session:
            if is_student:
                changable = session.get(Students, login)
            else:
                changable = session.get(Teachers, login)
            
            changable.password = new_password
            session.commit()
            
    @staticmethod
    def update_user_full_name(login:str, new_name: str, new_surname: str, new_patronymic: str, is_student: bool) -> None:
        with get_local()[1]() as session:
            if is_student:
                changable = session.get(Students, login)
            else:
                changable = session.get(Teachers, login)
            
            changable.name = new_name
            changable.surname = new_surname
            changable.patronymic = new_patronymic
            session.commit()

    @staticmethod
    def update_student_group(student_login: str, new_groupname: str) -> None:
        with get_local()[1]() as session:
            query = (select(Groups.group_id).select_from(Groups)).where(
                Groups.name == new_groupname)
            result = session.execute(query)
            group = result.scalars().all()[0]

            changable = session.get(StudentGroup, student_login)
            changable.group_id = group
            session.commit()

    # -----------------------------------
    # selecting infromation from database
    #------------------------------------
    @staticmethod
    def get_student(user_login: str) -> Students:
        with get_local()[1]() as session:
            user = session.get(Students, user_login)
        return user
    
    @staticmethod
    def get_teacher(user_login: str) -> Teachers:
        with get_local()[1]() as session:
            user = session.get(Teachers, user_login)
        return user
    
    @staticmethod
    def select_students() -> list:
        with get_local()[1]() as session:
            query = select(Students)
            result = session.execute(query)
            users = result.scalars().all()
        return users
    
    @staticmethod
    def select_teachers() -> list:
        with get_local()[1]() as session:
            query = select(Teachers)
            result = session.execute(query)
            users = result.scalars().all()
        return users
    
    def get_groups() -> list:
        with get_local()[1]() as session:
            query = select(Groups)
            result = session.execute(query)
            groups = result.scalars().all()
        return groups
    
    def get_subjects() -> list:
        with get_local()[1]() as session:
            query = select(Subjects)
            result = session.execute(query)
            subjects = result.scalars().all()
        return subjects
    
    def get_homeworks() -> list:
        with get_local()[1]() as session:
            query = select(HomeWorks)
            result = session.execute(query)
            homeworks = result.scalars().all()
        return homeworks

    def get_materials(subject_name: str) -> list:
        with get_local()[1]() as session:
            query = select([Materials.title, Materials.link]).where(Materials.subject == subject_name)
            result = session.execute(query)
            materials = result.scalars().all()
            print(materials)
        return materials
            
    # -----------
    # other stuff
    #------------

    @staticmethod
    def get_user_info(user_login: str) -> Students | Teachers:
        with get_local()[1]() as session:
            user = session.get(Students, user_login)
            if user == None:
                user = session.get(Teachers, user_login)
        return user
    
    @staticmethod
    def get_user_group(user_login: str) -> str:
        with get_local()[1]() as session:
            group = session.get(StudentGroup, user_login)
        return group

    @staticmethod
    def sign_in(user_login: str, user_password: str, is_student: bool) -> bool:
        with get_local()[1]() as session:
            if is_student: user = session.get(Students, user_login)
            else: user = session.get(Teachers, user_login)
        if user == None or user.password != user_password:
            return False
        return True

def init() -> None:
    DB.add_subject("Matan")
    DB.add_subject("Diskra")
    DB.add_subject("algebra")
    DB.add_subject("C#")
    DB.add_subject("C++")
    DB.add_subject("C")
    DB.add_group("БПИ231")
    DB.add_group("БПИ235")
    DB.add_group("БПИ233")
    DB.add_student("asamirov@edu.hse.ru", "Agil", "Agil", "Amirov", "Shaig ogly")
    # print(DB.add_student("asamirov@edu.hse.ru", "RIM", "Agil", "Amirov", "Shaig ogly"))
    DB.add_teacher("Roma@edu.hse.ru", "Roma", "Roma", "Roma", "Roma")
    DB.add_student_to_group("asamirov@edu.hse.ru", "БПИ233")
    DB.add_teacher_to_the_group("Roma@edu.hse.ru", "algebra", "БПИ233")
    DB.update_user_password("Roma@edu.hse.ru", "neRoma", False)
    DB.update_student_group("asamirov@edu.hse.ru", "БПИ231")
    DB.update_student_group("asamirov@edu.hse.ru", "БПИ233")
    # print(DB.get_teacher("Roma@edu.hse.ru"))
    # print(DB.get_user_info("Roma@edu.hse.ru").login)
    # print(DB.get_user_info("Roma@edu.hse.ru").name)
    # print(DB.get_user_info("Roma@edu.hse.ru").surname)
    # print(DB.get_user_info("Roma@edu.hse.ru").patronymic)
    # print(DB.get_user_group("Roma@edu.hse.ru"))

if create_tables == 'True':
    DB.create_tables()

if __name__ == '__main__':
    init()