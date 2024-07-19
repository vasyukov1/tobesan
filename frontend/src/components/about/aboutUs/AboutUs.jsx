import React from "react";
import leonidImage from "../images/leo.jpeg";
import dmitriyImage from "../images/dima.jpeg";
import alexandrImage from "../images/alex.jpeg";
import agilImage from "../images/agile.jpeg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1>Наша команда</h1>
      <div className="team">
        <div className="teamMember">
          <img src={leonidImage} alt="Леонид Лившиц" />
          <h2>
            Леонид
            <br />
            Лившиц
          </h2>
          <p>Студент ПИ ВШЭ, frontend</p>
          <a href="https://t.me/vyshkochka">Блог</a>
        </div>
        <div className="teamMember">
          <img src={dmitriyImage} alt="Дмитрий Алексеев" />
          <h2>
            Дмитрий
            <br />
            Алексеев
          </h2>
          <p>Студент ПИ ВШЭ, design</p>
          <a href="https://t.me/Mister_V_1">Блог</a>
        </div>
        <div className="teamMember">
          <img src={alexandrImage} alt="Александр Васюков" />
          <h2>
            Александр
            <br />
            Васюков
          </h2>
          <p>Студент ПИ ВШЭ, frontend, P.M.</p>
          <a href="https://t.me/overmindv">Блог</a>
        </div>
        <div className="teamMember">
          <img src={agilImage} alt="Агиль Амиров" />
          <h2>
            Агиль
            <br />
            Амиров
          </h2>
          <p>Студент ПИ ВШЭ, backend</p>
          <a href="https://t.me/amirovagil">Блог</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
