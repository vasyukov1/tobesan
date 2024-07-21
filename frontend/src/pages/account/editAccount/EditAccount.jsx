// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// import Header from "../../../components/header/Header";
// import Sidepanel from "../../../components/sidepanel/Sidepanel";
// import Footer from "../../../components/footer/Footer";

// import "./EditAccount.css";
// import UserService from "../../../service/UserService";
// import { ACCOUNT_ROUTE } from "../../../routing/const";
// import { useNavigate } from "react-router-dom";

// const EditAccount = () => {
//   const [role, setRole] = useState(true);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     birthDate: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
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
//   const RoleSet = (event) => {
//     setRole(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = {
//       firstName: form.elements.firstName.value,
//       lastName: form.elements.lastName.value,
//       middleName: form.elements.middleName.value,
//       birthDate: form.elements.birthDate.value,
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//       confirmPassword: form.elements.confirmPassword.value,
//       role: form.elements.role.value,
//     };

//     UserService.addUser(
//       formData.email,
//       formData.password,
//       formData.firstName,
//       formData.lastName,
//       formData.middleName,
//       formData.role
//     ).then((result) => {
//       if (result) {
//         localStorage.setItem("login", formData.email);
//         localStorage.setItem("authToken", "your-token"); // change "your token" to email
//         localStorage.setItem("role", formData.role);
//         navigate(ACCOUNT_ROUTE);
//       } else {
//         alert("Регистрация не удалась");
//       }
//     });
//   };

//   // const [user] = useState(null);
//   // const role = localStorage.getItem("role");

//   // const navigate = useNavigate();

//   // if (!user) {
//   //   return <div>Загрузка...</div>;
//   // }

//   // const changePassword = () => {
//   //   // Смена пароля
//   // };

//   // const editAccount = () => {
//   //   navigate(EDIT_ACCOUNT_ROUTE);
//   //   // Редактирование аккаунта
//   // };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel />
//         <div className="account-page">
//           <div className="registerPage">
//             <form onSubmit={handleSubmit}>
//               <input
//                 className="registerButton"
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Имя"
//                 required
//               />
//               <input
//                 className="registerButton"
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Фамилия"
//                 required
//               />
//               <input
//                 className="registerButton"
//                 type="text"
//                 name="middleName"
//                 value={formData.middleName}
//                 onChange={handleChange}
//                 placeholder="Отчество"
//               />
//               <input
//                 className="registerButton"
//                 type="date"
//                 name="birthDate"
//                 value={formData.birthDate}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 className="registerButton"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//               />
//               <input
//                 className="registerButton"
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Пароль"
//                 required
//               />
//               <input
//                 className="registerButton"
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Подтвердите пароль"
//                 required
//               />
//               <div className="page">
//                 <div>
//                   <div>
//                     <label>
//                       <input
//                         type="radio"
//                         name="role"
//                         value={true}
//                         onClick={RoleSet}
//                       />
//                       Student
//                     </label>
//                     <label>
//                       <input
//                         type="radio"
//                         name="role"
//                         value={false}
//                         onClick={RoleSet}
//                       />
//                       Teacher
//                     </label>
//                   </div>
//                   {formData.role == "false" && (
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Предмет"
//                       required
//                     />
//                   )}
//                 </div>
//               </div>
//               <button className="loginButton" type="submit">
//                 Зарегистрироваться
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EditAccount;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Header from "../../../components/header/Header";
// import Sidepanel from "../../../components/sidepanel/Sidepanel";
// import Footer from "../../../components/footer/Footer";

// import "./EditAccount.css";
// import UserService from "../../../service/UserService";

// const EditAccount = () => {
//   const [user, setUser] = useState(null);

//   UserService.getUserInfo(localStorage.getItem("login")).then((result) => {
//     if (result) {
//       const userInfo = {
//         firstName: result.name,
//         lastName: result.surname,
//         middleName: result.patronymic,
//         birthDate: "16.04.2005",
//         faculty: "компьютерных наук",
//         group: "БПИ233",
//         direction: "Программная инженерия",
//         login: result.login,
//         subject: "Алгебра",
//         photo: "https://via.placeholder.com/150",
//       };
//       setUser(userInfo);
//     } else {
//       alert("Ошибка");
//     }
//   });

//   // const [firstName, setFirstName] = useState(initialData.firstName);
//   // const [lastName, setLastName] = useState(initialData.lastName);
//   // const [middleName, setMiddleName] = useState(initialData.middleName);
//   // const [birthDate, setBirthDate] = useState(initialData.birthDate);
//   // const [email, setEmail] = useState(initialData.email);
//   // const [password, setPassword] = useState("");
//   // const [avatar, setAvatar] = useState(null);

//   const handleAvatarChange = (e) => {
//     setAvatar(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert("Account updated successfully!");
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel />
//         <div className="account-page">
//           <div className="registerPage">
//             <form className="account-edit-form" onSubmit={handleSubmit}>
//               <h1>Редактирование аккаунта</h1>
//               <div className="form-group">
//                 <label>Имя</label>
//                 <input
//                   type="text"
//                   value={user.firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Фамилия</label>
//                 <input
//                   type="text"
//                   value={user.lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Отчество</label>
//                 <input
//                   type="text"
//                   value={user.middleName}
//                   onChange={(e) => setMiddleName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Дата рождения</label>
//                 <input
//                   type="date"
//                   value={user.birthDate}
//                   onChange={(e) => setBirthDate(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   value={user.login}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Пароль</label>
//                 <input
//                   type="password"
//                   value={user.password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Аватар</label>
//                 <input type="file" onChange={handleAvatarChange} />
//                 {avatar && (
//                   <img
//                     src={avatar}
//                     alt="Avatar Preview"
//                     className="avatar-preview"
//                   />
//                 )}
//               </div>
//               <button type="submit" className="submit-button">
//                 Сохранить изменения
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EditAccount;
