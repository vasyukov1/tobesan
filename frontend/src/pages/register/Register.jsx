import React, { useState } from "react";
import UserService from "../../service/UserService";
import { ACCOUNT_ROUTE } from "../../routing/const";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";
import "../login/Login.css";
import "./Register.css";

const Register = () => {
  const [role, setRole] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: true,
    faculty: "",
    direction: "",
    course: "",
    group: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const RoleSet = (event) => {
    setRole(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      middleName: form.elements.middleName.value,
      birthDate: form.elements.birthDate.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      confirmPassword: form.elements.confirmPassword.value,
      role: form.elements.role.value === "teacher" ? true : false,
    };

    UserService.addUser(
      formData.email,
      formData.password,
      formData.firstName,
      formData.lastName,
      formData.middleName,
      formData.role
    ).then((result) => {
      if (result) {
        localStorage.setItem("login", formData.email);
        localStorage.setItem("authToken", "your-token"); // change "your token" to email
        localStorage.setItem("role", formData.role);
        navigate(ACCOUNT_ROUTE);
      } else {
        alert("Регистрация не удалась");
      }
    });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="page">
        <Sidepanel />
        <div className="registerPage">
          <form onSubmit={handleSubmit}>
            <input
              className="registerButton"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Имя"
              required
            />
            <input
              className="registerButton"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Фамилия"
              required
            />
            <input
              className="registerButton"
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Отчество"
            />
            <input
              className="registerButton"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
            <input
              className="registerButton"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className="registerButton"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
              required
            />
            <input
              className="registerButton"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Подтвердите пароль"
              required
            />
            <div className="page">
              {/* {localStorage.getItem("role") === false ? ( */}
              <div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="student"
                      onClick={RoleSet}
                    />
                    Student
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="teacher"
                      onClick={RoleSet}
                    />
                    Teacher
                  </label>
                </div>
                {formData.role === false && (
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Предмет"
                    required
                  />
                )}
              </div>
            </div>
            <button className="loginButton" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
