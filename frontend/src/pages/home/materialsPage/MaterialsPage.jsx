import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Sidepanel from "../../../components/sidepanel/Sidepanel";
import Modal from "../../../functions/modal/Modal";
import AddNoteModal from "../../../functions/addNoteModal/AddNoteModal";

const MaterialsPage = ({ subjects }) => {
  const { subjectName } = useParams();
  const subject = subjects[subjectName];

  const role = localStorage.getItem("role");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    file: null,
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewNote({ ...newNote, file });
  };

  // const addNote = (e) => {
  //   e.preventDefault();
  //   setNotes([...notes, newNote]);
  //   setNewNote({ title: "", description: "", file: null });
  //   closeModal();
  // };

  const addNote = async (e) => {
    e.preventDefault();

    // Create a new FormData object and append the note data to it
    const formData = new FormData();
    formData.append("title", newNote.title);
    formData.append("description", newNote.description);
    formData.append("file", newNote.file);

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setNotes([...notes, data]);

      setNewNote({ title: "", description: "", file: null });

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="page">
        <Sidepanel ourPage="subjects" />
        <h1>{subject.name} - Конспекты</h1>
        {role === false && (
          <button onClick={openModal}>Добавить материалы</button>
        )}
        <table>
          <thead>
            <tr>
              <th>Номер</th>
              <th>Название</th>
              <th>Описание</th>
              <th>Файл</th>
              {role === false && <th>Редактировать</th>}
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>
                  {note.file && (
                    <a
                      href={URL.createObjectURL(note.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Скачать
                    </a>
                  )}
                </td>
                {role === false && <td>Редактировать</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNoteModal onClose={closeModal} onAddNote={addNote} />
      </Modal>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MaterialsPage;
