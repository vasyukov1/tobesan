// import React from "react";
// import Header from "../../components/header/Header";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Footer from "../../components/footer/Footer";

// const GradesPage = () => {
//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="page">
//         <Sidepanel ourPage="grades" />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default GradesPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";
import "./GradesPage.css";

const GradesPage = () => {
  const [students, setStudents] = useState([]);
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    // axios.get("/api/students").then((response) => {
    //   setStudents(response.data);
    // });
    // axios.get("/api/homeworks").then((response) => {
    //   setHomeworks(response.data);
    // });
  }, []);

  const calculateAverageGrade = (student) => {
    // const grades = student.grades.map((grade) => grade.score);
    // const sum = grades.reduce((a, b) => a + b, 0);
    // return sum / grades.length;
  };

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
              <th>Студент</th>
              {homeworks.map((homework) => (
                <th key={homework.id}>{homework.name}</th>
              ))}
              <th>Средний балл</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
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

// import React, { useState, useEffect } from "react";
// import UserService from "../../service/UserService.js";
// import Header from "../../components/header/Header";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Footer from "../../components/footer/Footer";

// const GradesPage = () => {
//   const [students, setStudents] = useState([]);
//   const [homeworks, setHomeworks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const studentsData = await UserService.getStudents();
//       setStudents(studentsData);
//       const homeworksData = await UserService.getHomeworks();
//       setHomeworks(homeworksData);
//     };
//     fetchData();
//   }, []);

//   const calculateAverageGrade = (student) => {
//     const grades = student.grades.map((grade) => grade.score);
//     const sum = grades.reduce((a, b) => a + b, 0);
//     return sum / grades.length;
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="page">
//         <Sidepanel ourPage="grades" />
//         <table>
//           <thead>
//             <tr>
//               <th>Студент</th>
//               {homeworks.map((homework) => (
//                 <th key={homework.id}>{homework.name}</th>
//               ))}
//               <th>Средний балл</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.name}</td>
//                 {homeworks.map((homework) => (
//                   <td key={homework.id}>
//                     {student.grades.find(
//                       (grade) => grade.homeworkId === homework.id
//                     )?.score || "-"}
//                   </td>
//                 ))}
//                 <td>{calculateAverageGrade(student)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <style jsx>{`
//           table {
//             border-collapse: collapse;
//             width: 100%;
//           }
//           th,
//           td {
//             border: 1px solid #ddd;
//             padding: 8px;
//             text-align: left;
//           }
//           th {
//             background-color: #f2f2f2;
//           }
//           tr:nth-child(even) {
//             background-color: #f2f2f2;
//           }
//         `}</style>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default GradesPage;
