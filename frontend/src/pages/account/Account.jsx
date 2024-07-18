import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { LOGIN_ROUTE } from "../../routing/const";
import "./Account.css";

import React, { useState, useEffect } from "react";

const AccountPage = ({ userId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate(LOGIN_ROUTE);
  };

  const [user, setUser] = useState(null);
  const role = localStorage.getItem("role");

  useEffect(() => {
    // Здесь вы можете сделать запрос к вашему API для получения данных пользователя
    // Пример:
    // fetch(`/api/user/${userId}`)
    //   .then(response => response.json())
    //   .then(data => setUser(data));

    // Для примера используем статичные данные
    const exampleUser = {
      firstName: "Иван",
      lastName: "Иванов",
      middleName: "Иванович",
      birthDate: "01.01.2000",
      faculty: "Факультет информатики",
      group: "Группа 101",
      direction: "Программирование",
      login: "ivanov",
      subject: "Математика",
      photo: "https://via.placeholder.com/150",
    };
    setUser(exampleUser);
  }, [userId]);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <Header />
      <div className="account-page">
        <img src={user.photo} alt="User" className="user-photo" />
        <p>{role === true ? "Студент" : "Преподаватель"}</p>
        <h1>{`${user.lastName} ${user.firstName} ${user.middleName}`}</h1>
        <p>Дата рождения: {user.birthDate}</p>
        {role === true ? (
          <>
            <p>Факультет: {user.faculty}</p>
            <p>Группа: {user.group}</p>
            <p>Направление: {user.direction}</p>
          </>
        ) : (
          <p>Предмет преподавания: {user.subject}</p>
        )}
        <p>Логин: {user.login}</p>
        <div className="buttons">
          <button className="buttonAccount">Сменить пароль</button>
          <button className="buttonAccount">Редактировать аккаунт</button>
          <button className="buttonAccount" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
