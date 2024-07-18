from typing import Annotated
from typing import Optional

from sqlalchemy import ForeignKey, text
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped, mapped_column

import datetime

str_64 = Annotated[str, 64]
intpk = Annotated[int, mapped_column(primary_key=True)]
str_64pk = Annotated[str, 64, mapped_column(primary_key=True)]
created_at = Annotated[datetime.datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"))]
# updated_at = Annotated[datetime.datetime, mapped_column(
#         server_default=text("TIMEZONE('utc', now())"),
#         onupdate=datetime.datetime.utcnow,
#     )]

class Base(DeclarativeBase):
    type_annotation_map = {
        str_64: String(64)
    }

    repr_cols_num = 3
    repr_cols = tuple()

    def __repr__(self):
        """Relationships не используются в repr(), т.к. могут вести к неожиданным подгрузкам"""
        cols = []
        for idx, col in enumerate(self.__table__.columns.keys()):
            if col in self.repr_cols or idx < self.repr_cols_num:
                cols.append(f"{col}={getattr(self, col)}")

        return f"<{self.__class__.__name__} {', '.join(cols)}>"


class Teachers (Base):
    __tablename__ = "teachers"

    login: Mapped[str_64pk]
    password: Mapped[str_64]

    name: Mapped[str_64]
    surname: Mapped[str_64]
    patronymic: Mapped[str_64]

class Students (Base):
    __tablename__ = "students"

    login: Mapped[str_64pk]
    password: Mapped[str_64]

    name: Mapped[str_64]
    surname: Mapped[str_64]
    patronymic: Mapped[str_64]

class Groups(Base):
    __tablename__ = "groups"

    group_id: Mapped[intpk]
    name: Mapped[str_64]

class Subjects(Base):
    __tablename__ = "subjects"

    subject_id: Mapped[intpk]
    name: Mapped[str_64]

class StudentGroup(Base):
    __tablename__ = "studentgroup"

    student_id: Mapped[str_64] = mapped_column(
        ForeignKey("students.login", ondelete="CASCADE"),
        primary_key=True,
    )
    group_id: Mapped[int] = mapped_column(
        ForeignKey("groups.group_id", ondelete="CASCADE"),
        primary_key=False,
    )

class SubjectGroupTeacher(Base):
    __tablename__ = "subjectgroupteacher"

    teacher_id: Mapped[str_64] = mapped_column(
        ForeignKey("teachers.login", ondelete="CASCADE"),
        primary_key=True,
    )
    group_id: Mapped[int] = mapped_column(
        ForeignKey("groups.group_id", ondelete="CASCADE"),
        primary_key=True,
    )
    subject_id: Mapped[int] = mapped_column(
        ForeignKey("subjects.subject_id", ondelete="CASCADE"),
        primary_key=True,
    )

class HomeWorks(Base):
    __tablename__ = "hw"

    hw_id: Mapped[intpk]
    group_id: Mapped[int] = mapped_column(
        ForeignKey("groups.group_id", ondelete="CASCADE"),
        primary_key=False,
    )
    subject_id: Mapped[int] = mapped_column(
        ForeignKey("subjects.subject_id", ondelete="CASCADE"),
        primary_key=False,
    )
    number: Mapped[int]
    
    # given: Mapped[created_at]
    # deadline:
    # task:
    # additional_source:

class HomeWorksSent(Base):
    __tablename__ = "homeworkssent"

    hw_id: Mapped[int] = mapped_column(
        ForeignKey("hw.hw_id", ondelete="CASCADE"),
        primary_key=True
    )
    student_id: Mapped[str_64] = mapped_column(
        ForeignKey("students.login", ondelete="CASCADE"),
        primary_key=True,
    )
    mark: Mapped[Optional[int]]

                                         
# class Materials(Base):
#     __tablename__ = "materials"


# class User_(Base):
#     __tablename__ = "user_"

#     login: Mapped[str_64pk]
#     password: Mapped[str_64]
#     role: Mapped[int] # 0 - teacher, 1 - student (I hate enums)
#     is_connected: Mapped[bool]


#     name: Mapped[str_64]
#     surname: Mapped[str_64]
#     patronymic: Mapped[str_64]
#     # last_online: time
