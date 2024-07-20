import React from "react";

import leonidImage from "../images/leo.jpeg";
import dmitriyImage from "../images/dima.jpeg";
import alexandrImage from "../images/alex.jpeg";
import agilImage from "../images/agile.jpeg";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1>Our Team</h1>
      <div className="team">
        <div className="teamMember">
          <img src={leonidImage} alt="leo-livshits" />
          <h2>
            Leonid
            <br />
            Livshits
          </h2>
          <p>SE FCS HSE</p>
          <p>frontend</p>
          <a href="https://t.me/vyshkochka">Telegram</a>
        </div>
        <div className="teamMember">
          <img src={dmitriyImage} alt="dima-alekseev" />
          <h2>
            Dmitry
            <br />
            Alekseev
          </h2>
          <p>SE FCS HSE</p>
          <p>design</p>
          <a href="https://t.me/Mister_V_1">Telegram</a>
        </div>
        <div className="teamMember">
          <img src={alexandrImage} alt="alex-vasyukov" />
          <h2>
            Alexander
            <br />
            Vasyukov
          </h2>
          <p>SE FCS HSE</p>
          <p>frontend, PM</p>
          <a href="https://t.me/overmindv">Telegram</a>
        </div>
        <div className="teamMember">
          <img src={agilImage} alt="agil-amirov" />
          <h2>
            Agil
            <br />
            Amirov
          </h2>
          <p>SE FCS HSE</p>
          <p>backend</p>
          <a href="https://t.me/amirovagil">Telegram</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
