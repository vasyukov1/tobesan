// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     birthDate: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "student",
//     faculty: "",
//     direction: "",
//     course: "",
//     group: "",
//     subject: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Пароли не совпадают");
//       return;
//     }
//     try {
//       const response = await axios.post("/api/register", formData);
//       alert("Регистрация прошла успешно");
//     } catch (error) {
//       console.error("Ошибка регистрации", error);
//       alert("Ошибка регистрации");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstName"
//         value={formData.firstName}
//         onChange={handleChange}
//         placeholder="Имя"
//         required
//       />
//       <input
//         type="text"
//         name="lastName"
//         value={formData.lastName}
//         onChange={handleChange}
//         placeholder="Фамилия"
//         required
//       />
//       <input
//         type="text"
//         name="middleName"
//         value={formData.middleName}
//         onChange={handleChange}
//         placeholder="Отчество"
//       />
//       <input
//         type="date"
//         name="birthDate"
//         value={formData.birthDate}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Пароль"
//         required
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         placeholder="Подтвердите пароль"
//         required
//       />
//       <select
//         name="role"
//         value={formData.role}
//         onChange={handleChange}
//         required
//       >
//         <option value="student">Студент</option>
//         <option value="teacher">Преподаватель</option>
//       </select>
//       {formData.role === "student" && (
//         <>
//           <input
//             type="text"
//             name="faculty"
//             value={formData.faculty}
//             onChange={handleChange}
//             placeholder="Факультет"
//             required
//           />
//           <input
//             type="text"
//             name="direction"
//             value={formData.direction}
//             onChange={handleChange}
//             placeholder="Направление"
//             required
//           />
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             placeholder="Курс"
//             required
//           />
//           <input
//             type="text"
//             name="group"
//             value={formData.group}
//             onChange={handleChange}
//             placeholder="Группа"
//             required
//           />
//         </>
//       )}
//       {formData.role === "teacher" && (
//         <input
//           type="text"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           placeholder="Предмет"
//           required
//         />
//       )}
//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// };

// export default Register;
