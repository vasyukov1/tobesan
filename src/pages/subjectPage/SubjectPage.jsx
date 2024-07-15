import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const SubjectPage = ({ subjectInfo }) => {
  const { subjectName } = useParams();
  const subject = subjectInfo[subjectName];

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1>{subject.name}</h1>
        <p>{subject.description}</p>
        <Link to={`/subjects/${subjectName}/homework`}>
          <button>Перейти к домашнему заданию</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SubjectPage;
