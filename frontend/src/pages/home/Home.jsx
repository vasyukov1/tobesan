import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { subjects } from "../../components/subjects/Subjects";
import { Link } from "react-router-dom";
import "./Home.css";
import Sidepanel from "../../components/sidepanel/Sidepanel";

const Home = () => {
  const role = localStorage.getItem("role");
  const subjectKeys = Object.keys(subjects);

  return (
    <div>
      <Header />
      <div className="pagehome">
        <Sidepanel ourPage="subjects" />
        <div className="home">
          {/* <div className="topButtons"> */}
          {subjectKeys.map((subject) => (
            <Link key={subject} to={`/subjects/${subject}`}>
              <button className="subject-button">
                {subjects[subject].name}
              </button>
              {/* <button className="button"> */}
            </Link>
          ))}
          {role === false && (
            <button className="add-subject-button">Добавить предмет</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
