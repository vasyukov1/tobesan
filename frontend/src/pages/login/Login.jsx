import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ACCOUNT_ROUTE, REGISTER_ROUTE } from "../../routing/const";

import Input from "./input/Input";
import "./Login.css";
import UserService from "../../service/UserService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate(ACCOUNT_ROUTE);
    }
  }, [navigate]);

  const handleLogin = () => {
    UserService.sign_in(email, password, role).then((result) => {
      localStorage.setItem("role", role);
      if (result) {
        localStorage.setItem("login", email);
        localStorage.setItem("authToken", "your-token");
        localStorage.setItem("role", role);
        navigate(ACCOUNT_ROUTE);
      } else {
        alert("Неверный пароль или логин");
      }
    });
  };

  const handleRegister = () => {
    navigate(REGISTER_ROUTE);
  };

  return (
    <div>
      <Header />
      <div className="loginArea">
        <div className="buttonsArea">
          <h1>Вход</h1>
          <Input text="Почта " type="email" value={email} setValue={setEmail} />

          <Input
            text="Пароль "
            type="password"
            value={password}
            setValue={setPassword}
          />
          <div>
            {/* <label>
              <input
                type="radio"
                name="role"
                value="student"
                className="role-radio"
                checked={role === true}
                onChange={(event) => setRole(event.target.value)}
              />
              Student
            </label> */}
            <label>
              <input
                type="radio"
                name="role"
                value={true}
                onChange={(event) => setRole(event.target.value)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value={false}
                onChange={(event) => setRole(event.target.value)}
              />
              Teacher
            </label>
            {/*<label>
               <input
                type="radio"
                name="role"
                value="teacher"
                className="role-radio"
                checked={role === false}
                onChange={(event) => setRole(event.target.value)}
              />
              Teacher
            </label> */}
          </div>
          <button className="loginButton" onClick={handleLogin}>
            Войти
          </button>
          <p>--- Новенький? ---</p>
          <button className="loginButton" onClick={handleRegister}>
            Зарегистрироваться
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
