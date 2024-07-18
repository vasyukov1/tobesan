import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ACCOUNT_ROUTE } from "../../routing/const";

import Input from "./input/Input";
import "./Login.css";
import UserService from "../../service/UserService";

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

  // My code
  const handleLogin = () => {
    if (!UserService.sign_in(email, password, true)) {
      localStorage.setItem("authToken", "your-token");
      localStorage.setItem("role", role);
      navigate(ACCOUNT_ROUTE);
    } else {
      alert("ЛОХ");
    }
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
          <button className="loginButton" onClick={handleLogin}>
            Войти
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
