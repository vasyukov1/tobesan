from main import DB, init
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
 
@app.route("/")
def hello():
    return "Hello World!"

#-----------------
# info about users
#-----------------
# @app.route("/users", methods = ['POST'])
# def all_users():
#     pass

@app.route("/users/add", methods = ['POST'])
def add_user():
    data = request.json
    
    if data["role"]:
        result = DB.add_student(data["login"], data["password"], data["name"], data["surname"], data["patronymic"])
    else:
        result = DB.add_teacher(data["login"], data["password"], data["name"], data["surname"], data["patronymic"])

    return jsonify({"result": result})

@app.route("/users/signIn", methods = ['POST'])
def sign_in():
    data = request.json
    if data["isStudent"] == "false": isStudent = False
    else: isStudent = True
    print(data["login"], data["password"], type(data["isStudent"]))
    result = DB.sign_in(data["login"], data["password"], isStudent)
    print(result)
    return jsonify({"result": result})


@app.route("/users/changePassword", methods = ['POST'])
def change_password():
    data = request.json
    DB.update_user_password(data["login"], data["password"], data["newPassword"], data["isStudent"])

@app.route("/users/changeFullName", methods = ['POST'])
def change_full_name():
    data = request.json
    DB.update_user_full_name(data["login"], data["new_name"], data["new_surname"], data["new_patronymic"], data["isStudent"])

@app.route("/users/delete", methods = ['POST'])
def delete_user():
    data = request.json
    DB.delete_user(data["login"], data["isStudent"])

@app.route("/users/getInfo", methods = ['POST'])
def get_user_info():
    data = request.json
    result1 = DB.get_user_info(data["login"])
    # result2 = DB.get_user_group(data["login"]) 
    return jsonify({"login": result1.login,
                    "name": result1.name,
                    "surname": result1.surname,
                    "patronymic": result1.patronymic,})
#------------------
# info about groups
#------------------
# @app.route("/groups", methods = ['GET'])
# def get_groups():
#     pass

@app.route("/groups/add", methods = ['POST'])
def add_group():
    pass

@app.route("/groups/delete", methods = ['POST'])
def delete_group():
    pass

@app.route("/group/addStudent", methods = ['POST'])
def add_student_to_group():
    pass

@app.route("/groups/removeStudent", methods = ['POST'])
def remove_student_from_group():
    pass

@app.route("/groups/update", methods = ['POST'])
def update_students_group():
    pass

#---------------------
# info about homeworks
#---------------------
# @app.route("/homeworks/")

#---------------------
# info about materials
#---------------------
# @app.route("/materials", methods = ['GET'])
# def hello():
#     pass

@app.route("/materials/add", methods = ['POST'])
def add_material():
    print("GAIL")
    data = request.json
    print(data["subject"], data["title"], data["link"])
    result = DB.add_material(data["subject"], data["title"], data["link"])
    return jsonify({"result": result})


@app.route("/materials/delete", methods = ['POST'])
def delete_material():
    pass

@app.route("/materials/get", methods = ['POST'])
def get_material():
    data = request.json
    result = DB.get_materials(data["subject"])
    return jsonify({"result": result})


if __name__ == "__main__":
    init()
    app.run()
 