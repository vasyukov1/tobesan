from main import DB, init
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
 
@app.route("/")
def hello():
    return "Hello World!"
 
@app.route("/users", methods = ['POST'])
def all_users():
    pass

@app.route("/users/add", methods = ['POST'])
def add_user():
    data = request.json
    if data["isStudent"]:
        DB.add_student(data["newLogin"], data["newPassword"], data["newName"], data["newSurname"], data["newPatronymic"])
    else:
        DB.add_teacher(data["newLogin"], data["newPassword"], data["newName"], data["newSurname"], data["newPatronymic"])

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

if __name__ == "__main__":
    init()
    app.run()
 