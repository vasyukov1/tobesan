import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ACCOUNT_ROUTE } from "../../routing/const";

import Input from "./input/Input";
import Button from "./button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate(ACCOUNT_ROUTE);
    }
  }, [navigate]);

  const handleLogin = () => {
    localStorage.setItem("authToken", "your-token");
    localStorage.setItem("role", role);
    navigate(ACCOUNT_ROUTE);
  };

  return (
    <div>
      <Header />
      <div className="">
        <h1>Вход</h1>
        <Input text="Почта" type="email" value={email} setValue={setEmail} />

        <Input
          text="Пароль"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={(event) => setRole(event.target.value)}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={role === "teacher"}
              onChange={(event) => setRole(event.target.value)}
            />
            Teacher
          </label>
        </div>

        <Button text="Войти" onClick={handleLogin} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       alert("Вход выполнен успешно");
//       localStorage.setItem("role", formData.role);
//       // Перенаправление на главную страницу или другую страницу после входа
//     } catch (error) {
//       console.error("Ошибка входа", error);
//       alert("Ошибка входа");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Пароль"
//           />
//           <select
//             name="role"
//             value={formData.role}
//             onChange={(event) => setRole(event.target.value)}
//           >
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//           </select>
//           <button type="submit">Войти</button>
//         </form>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Login;
