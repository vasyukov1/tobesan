// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Sidepanel from "../../components/sidepanel/Sidepanel";

// const SubjectPage = ({ subjectInfo }) => {
//   const { subjectName } = useParams();
//   const subject = subjectInfo[subjectName];

//   if (!subject) {
//     return <div>Subject not found</div>;
//   }

//   return (
//     <div>
//       <div>
//         <Header />
//         <Sidepanel />
//       </div>
//       <div>
//         <h1>{subject.name}</h1>

//         <Link to={`/subjects/${subjectName}/homework`}>
//           <button>Перейти к домашнему заданию</button>
//         </Link>
//         <Link to={`/subjects/${subjectName}/materials`}>
//           <button>Перейти к материалам</button>
//         </Link>
//         <p>{subject.description}</p>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default SubjectPage;

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Modal from "../../functions/modal/Modal";
import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
import "./SubjectPage.css";

const SubjectPage = ({ subjectInfo }) => {
  const { subjectName } = useParams();
  const subject = subjectInfo[subjectName];
  const role = localStorage.getItem("role");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="subjectPage">
        <Sidepanel />
        <div>
          <h1>{subject.name}</h1>
          {role === "teacher" && (
            <button onClick={openModal} className="subjectButton">
              Добавить материалы
            </button>
          )}
          <Link to={`/subjects/${subjectName}/homework`}>
            <button className="subjectButton">
              Перейти к домашнему заданию
            </button>
          </Link>
          <Link to={`/subjects/${subjectName}/materials`}>
            <button className="subjectButton">Перейти к материалам</button>
          </Link>
          <p>{subject.description}</p>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <AddNoteModal onClose={closeModal} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default SubjectPage;
