import axios from "axios";

const axios = require("axios");

// const { v4: uuidv4 } = require("uuid");
// const bcrypt = require("bcrypt");
// const tokenService = require("./TokenService");

class UserService {
  async addUser(
    newLogin,
    newPassword,
    newName,
    newSurname,
    newPatronymic,
    isStudent
  ) {
    let sendData = {
      role: isStudent,
      login: newLogin,
      password: newPassword,
      name: newName,
      surname: newSurname,
      patronymic: newPatronymic,
    };
    axios.post("http://127.0.0.1:5000/users/add", sendData);
  }
  // добавить обработку ответа
  async sign_in(role, inputLogin, inputPassword) {
    let sendData = {
      login: inputLogin,
      password: inputPassword,
      isStudent: role,
    };
    axios
      .post("http://127.0.0.1:5000/users/signIn", sendData)
      .then(function (response) {
        console.log(typeof response.data);
      })
      .catch(function (error) {
        console.error("Ошибка при отправке запроса:", error);
        return null;
      });
    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:5000/users/signIn",
    //     sendData
    //   );
    //   console.log(typeof response.data);
    //   return response.data;
    // } catch (error) {
    //   console.error("Ошибка при отправке запроса:", error);
    //   return null;
    // }
    // axios.post("http://127.0.0.1:5000/users/signIn", sendData);
  }

  async changePassword(inputLogin, inputPassword, inputNewPassword, role) {
    let sendData = {
      login: inputLogin,
      password: inputPassword,
      newPassword: inputNewPassword,
      isStudent: role,
    };
    axios.post("http://127.0.0.1:5000/users/changePassword", sendData);
  }

  async changeFullName(inputLogin, newName, newSurname, newPatronymic, role) {
    let sendData = {
      login: inputLogin,
      name: newName,
      surname: newSurname,
      patronymic: newPatronymic,
      isStudent: role,
    };
    axios.post("http://127.0.0.1:5000/users/changeFullName", sendData);
  }

  async deleteUser(inputLogin, role) {
    let sendData = {
      login: inputLogin,
      isStudent: role,
    };
    axios.post("http://127.0.0.1:5000/users/delete", sendData);
  }
}

module.exports = new UserService();
