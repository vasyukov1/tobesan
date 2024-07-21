import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import { subjects } from "../../components/subjects/Subjects";

import "./Materials.css";

const Materials = () => {
  const subjectKeys = Object.keys(subjects);

  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel ourPage="materials" />
        <div className="main">
          {subjectKeys.map((subject) => (
            <Link key={subject} to={`/materials/${subject}`}>
              <button className="subject-button">
                {subjects[subject].name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Materials;
