import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";
import { subjects } from "../../components/subjects/Subjects";

import "./Home.css";

const Home = () => {
  const role = localStorage.getItem("role");
  const subjectKeys = Object.keys(subjects);

  return (
    <div>
      <Header />
      <div className="pagehome">
        <Sidepanel ourPage="subjects" />
        <div className="home">
          {subjectKeys.map((subject) => (
            <Link key={subject} to={`/subjects/${subject}`}>
              <button className="subject-button">
                {subjects[subject].name}
              </button>
            </Link>
          ))}
          {role === "false" && (
            <button className="add-subject-button">Добавить предмет</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
