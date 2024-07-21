import axios from "axios";

class MaterialService {
  static async addMaterial(materialSubject, materialTitle, materialLink) {
    let sendData = {
      subject: materialSubject,
      title: materialTitle,
      link: materialLink,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/materials/add",
        sendData
      );
      return JSON.parse(response.data.result);
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      return null;
    }
  }

  static async getMaterials(material_subject) {
    let sendData = { subject: material_subject };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/materials/get",
        sendData
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      return null;
    }
  }

  // edit и delete я (Александр) добавил как заглушку.

  static async editMaterials(material_subject, materialTitle) {
    // let sendData = { subject: material_subject };
    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:5000/materials/get",
    //     sendData
    //   );
    //   return response.data;
    // } catch (error) {
    //   console.error("Ошибка при отправке запроса:", error);
    //   return null;
    // }
  }

  static async deleteMaterials(material_subject, materialTitle) {
    // let sendData = { subject: material_subject };
    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:5000/materials/get",
    //     sendData
    //   );
    //   return response.data;
    // } catch (error) {
    //   console.error("Ошибка при отправке запроса:", error);
    //   return null;
    // }
  }
}

export default MaterialService;
