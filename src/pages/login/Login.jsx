import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./input/Input";
import Button from "./button/Button";
import { setAuthAction } from "../../store/userReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
