import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { subjects } from "../../components/subjects/Subjects";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const role = localStorage.getItem("role");
  const subjectKeys = Object.keys(subjects);

  return (
    <div>
      <Header />

      <div className="home">
        {subjectKeys.map((subject) => (
          <Link key={subject} to={`/subjects/${subject}`}>
            <button className="subject-button">{subjects[subject].name}</button>
          </Link>
        ))}
        {role === "teacher" && (
          <button className="add-subject-button">Добавить предмет</button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
