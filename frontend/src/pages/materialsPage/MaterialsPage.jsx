import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";
import Modal from "../../functions/modal/Modal";
import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
import MaterialService from "../../service/MaterialService";

import "../login/Login.css";
import "./MaterialsPage.css";

const MaterialsPage = ({ subjects }) => {
  const { subjectName } = useParams();
  const subject = subjects[subjectName];
  const role = localStorage.getItem("role");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [titles, setTitles] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    MaterialService.getMaterials(subjectName).then((result) => {
      setTitles(result.titles);
      setLinks(result.links);
    });
  }, [subjectName]);

  const updateMaterialsList = (newTitle, newLink) => {
    setTitles([...titles, newTitle]);
    setLinks([...links, newLink]);
  };

  const deleteMaterial = (index) => {};

  const editMaterial = (index) => {};

  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel ourPage="materials" />
        <div className="naterialsPage">
          <div className="materialsTitle">
            <h1>{subject.name}</h1>
            <h2>Конспекты</h2>
            {role === "false" && (
              <div>
                <button className="loginButton" onClick={openModal}>
                  Добавить материалы
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <AddNoteModal
                    onClose={closeModal}
                    updateMaterialsList={updateMaterialsList}
                  />
                </Modal>
              </div>
            )}
          </div>
          <table id="Table">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Название</th>
                <th>Ссылка</th>
                {role === "false" && <th>Редактировать</th>}
                {role === "false" && <th>Удалить</th>}
              </tr>
            </thead>
            <tbody>
              {titles.map((title, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>
                    <a href={links[index]}>Ссылка</a>
                  </td>
                  {role === "false" && (
                    <td>
                      <button onClick={editMaterial(index)}>
                        Редактировать
                      </button>
                    </td>
                  )}
                  {role === "false" && (
                    <td>
                      <button onClick={deleteMaterial(index)}>Удалить</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaterialsPage;
