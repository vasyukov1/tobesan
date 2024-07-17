import React from "react";
import "./Sidepanel.css";
import { Link } from "react-router-dom";
import { subjects } from "../subjects/Subjects";

const Sidepanel = ({ ourPage }) => {
  const subjectKeys = Object.keys(subjects);
  return (
    <div className="sidepanel">
      <menu>
        <div>
          {subjectKeys.map((subject) => (
            <Link key={subject} to={`/${ourPage}/${subject}`}>
              <button className="sideItem">{subjects[subject].name}</button>
            </Link>
          ))}
        </div>
      </menu>
    </div>
  );
};

export default Sidepanel;
