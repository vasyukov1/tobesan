import axios from "axios";
// import express from "express";
// import cors from "cors";

// const app = express();

// app.use(cors());

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
  static async sign_in(inputLogin, inputPassword, role) {
    let sendData = {
      login: inputLogin,
      password: inputPassword,
      isStudent: role,
    };
    // axios
    //   .post("http://127.0.0.1:5000/users/signIn", sendData)
    //   .then(function (response) {
    //     console.log(JSON.parse(response.data.result));
    //     return JSON.parse(response.data.result);
    //   })
    //   .catch(function (error) {
    //     console.error("Ошибка при отправке запроса:", error);
    //     return null;
    //   });
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/users/signIn",
        sendData
      );
      console.log(JSON.parse(response.data.result));
      return JSON.parse(response.data.result);
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      return null;
    }
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

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

export default UserService;
