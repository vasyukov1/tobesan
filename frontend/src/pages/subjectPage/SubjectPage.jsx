import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
import Modal from "../../functions/modal/Modal";

import "./SubjectPage.css";

const SubjectPage = ({ subjectInfo }) => {
  const { subjectName } = useParams();
  const subject = subjectInfo[subjectName];
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

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
        <Sidepanel ourPage="subjects" />
        <div>
          <div></div>
          <h1>{subject.name}</h1>
          <Link to={`/homework/${subjectName}`}>
            <button className="subjectButton">
              Перейти к домашнему заданию
            </button>
          </Link>
          <Link to={`/materials/${subjectName}`}>
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
