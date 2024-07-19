import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Main from "../../components/main/Main";
import "./Grades.css";
import "../login/Login.css";

const Grades = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel ourPage="grades" />
        <div className="GradeUp">
          <a href="http://51.250.99.13:3000/">
            <button className="loginButton">Хочу хорошую оценку</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Grades;
