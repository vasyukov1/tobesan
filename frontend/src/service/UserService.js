import axios from "axios";

class UserService {
  static async addUser(
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
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/users/add",
        sendData
      );
      return JSON.parse(response.data.result);
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      return null;
    }
  }

  static async sign_in(inputLogin, inputPassword, role) {
    let sendData = {
      login: inputLogin,
      password: inputPassword,
      isStudent: role,
    };
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

  static async getUserInfo(userLogin) {
    let sendData = { login: userLogin };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/users/getInfo",
        sendData
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      return null;
    }
  }
  //   async changePassword(inputLogin, inputPassword, inputNewPassword, role) {
  //     let sendData = {
  //       login: inputLogin,
  //       password: inputPassword,
  //       newPassword: inputNewPassword,
  //       isStudent: role,
  //     };
  //     axios.post("http://127.0.0.1:5000/users/changePassword", sendData);
  //   }

  //   async changeFullName(inputLogin, newName, newSurname, newPatronymic, role) {
  //     let sendData = {
  //       login: inputLogin,
  //       name: newName,
  //       surname: newSurname,
  //       patronymic: newPatronymic,
  //       isStudent: role,
  //     };
  //     axios.post("http://127.0.0.1:5000/users/changeFullName", sendData);
  //   }

  //   async deleteUser(inputLogin, role) {
  //     let sendData = {
  //       login: inputLogin,
  //       isStudent: role,
  //     };
  //     axios.post("http://127.0.0.1:5000/users/delete", sendData);
  //   }
}

export default UserService;

// еще один вариант обработки
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
