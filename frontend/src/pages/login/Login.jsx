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

  // My code
  // const handleLogin = () => {
  //   localStorage.setItem("authToken", "your-token");
  //   localStorage.setItem("role", role);
  //   navigate(ACCOUNT_ROUTE);
  // };

  // GPT code
  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      localStorage.setItem("authToken", data.access_token);
      localStorage.setItem("role", role);
      navigate(ACCOUNT_ROUTE);
    } else {
      alert(data.message);
    }
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
