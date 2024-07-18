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
@app.route("/users", methods = ['GET'])
def all_users():
    pass

@app.route("/users/add", methods = ['POST'])
def add_user():
    data = request.json
    if data["isStudent"]:
        result = DB.add_student(data["newLogin"], data["newPassword"], data["newName"], data["newSurname"], data["newPatronymic"])
    else:
        result = DB.add_teacher(data["newLogin"], data["newPassword"], data["newName"], data["newSurname"], data["newPatronymic"])

    return jsonify({"result": result})

@app.route("/users/signIn", methods = ['POST'])
def sign_in():
    data = request.json
    result = DB.sign_in(data["login"], data["password"], data["isStudent"])
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

#------------------
# info about groups
#------------------
@app.route("/groups", methods = ['GET'])
def get_groups():
    pass

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
if __name__ == "__main__":
    init()
    app.run()
 