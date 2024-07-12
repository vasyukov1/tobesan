import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAuthAction } from "../../store/userReducer";
import { ACCOUNT_ROUTE } from "../../routing/const";

import Input from "./input/Input";
import Button from "./button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate(ACCOUNT_ROUTE);
    }
    console.log(`Login`);
  }, [isAuth]);

  const handleLogin = () => {
    // Здесь вход пользователя в аккаунт.
    //
    // userLogin({ email, password }).then((data) => {
    //   console.log(data);
    //   dispatch(setAuthAction(data));
    // });
    const user = {
      id: 1,
      email: "aas@edu.hse.ru",
      name: "Agil",
      surname: "Amirov",
      isAuth: true,
    };
    dispatch(setAuthAction(user));
  };

  return (
    <div>
      <div className="">
        <div className="">
          <h1>Вход</h1>
          <Input text="Почта" type="email" value={email} setValue={setEmail} />

          <Input
            text="Пароль"
            type="password"
            value={password}
            setValue={setPassword}
          />

          <Button text="Войти" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
