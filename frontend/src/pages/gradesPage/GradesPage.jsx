import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";
import "./GradesPage.css";

const GradesPage = () => {
  const [students] = useState([]); // , setStudents
  const [homeworks] = useState([]); // , setHomeworks

  useEffect(() => {}, []);

  const calculateAverageGrade = (student) => {}; // Нужно ли?

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="page">
        <Sidepanel ourPage="grades" />
        <table className="grades-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Студент</th>
              {homeworks.map((homework) => (
                <th key={homework.id}>{homework.name}</th>
              ))}
              <th>Средний балл</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index}</td>
                <td>{student.name}</td>
                {homeworks.map((homework) => (
                  <td key={homework.id}>
                    {student.grades.find(
                      (grade) => grade.homeworkId === homework.id
                    )?.score || "-"}
                  </td>
                ))}
                <td>{calculateAverageGrade(student)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GradesPage;
