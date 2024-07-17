import React from "react";
import "./Sidepanel.css";
import { Link } from "react-router-dom";
import { subjects } from "../subjects/Subjects";

const Sidepanel = () => {
  const subjectKeys = Object.keys(subjects);
  return (
    <div className="sidepanel">
      <menu>
        <div className="sideItem">
          {subjectKeys.map((subject) => (
            <Link key={subject} to={`/subjects/${subject}`}>
              <button className="subject-button">
                {subjects[subject].name}
              </button>
            </Link>
          ))}
        </div>
      </menu>
    </div>
  );
};

export default Sidepanel;
