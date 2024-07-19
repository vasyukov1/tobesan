import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Modal from "../../functions/modal/Modal";
import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
import Footer from "../../components/footer/Footer";
import "./MaterialsPage.css";

const MaterialsPage = ({ subjects }) => {
  const { subjectName } = useParams();
  const subject = subjects[subjectName];
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(`notes_${subjectName}`);
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    file: null,
  });
  const role = localStorage.getItem("role");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
  }, [notes, subjectName]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewNote({ ...newNote, [name]: value });
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setNewNote({ ...newNote, file });
  // };

  const addNote = (note) => {
    const newNoteData = {
      title: note.title,
      description: note.description,
      file: note.file,
    };

    setNotes([...notes, newNoteData]);
    setNewNote({ title: "", description: "", file: null });
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel ourPage="materials" />
        <div className="naterialsPage">
          <div className="materialsTitle">
            <h1>{subject.name} - Конспекты</h1>
            {role === "teacher" && (
              <button className="materialsPage" onClick={openModal}>
                Добавить материалы
              </button>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>Номер</th>
                <th>Название</th>
                <th>Файл</th>
                {role === "teacher" && <th>Редактировать</th>}
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{note.title}</td>
                  <td>
                    {note.file instanceof File && <a href={note.url}>Ссылка</a>}
                  </td>
                  {role === "teacher" && (
                    <td>
                      <button>Редактировать</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNoteModal onClose={closeModal} onAddNote={addNote} />
      </Modal>
      <Footer />
    </div>
  );
};

export default MaterialsPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../../components/header/Header";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Modal from "../../functions/modal/Modal";
// import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
// import Footer from "../../components/footer/Footer";

// const MaterialsPage = ({ subjects }) => {
//   const { subjectName } = useParams();
//   const subject = subjects[subjectName];
//   const [notes, setNotes] = useState(() => {
//     // homeworks, setHomeworks
//     const savedNotes = localStorage.getItem("notes"); //savedHomeworks
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });
//   const [newNotes, setNewNotes] = useState({
//     // newHomework, setNewHomework
//     title: "",
//     conditionLink: "",
//     description: "",
//     file: null,
//   });
//   const role = localStorage.getItem("role");

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNotes({ ...newNotes, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewNotes({ ...newNotes, conditionLink: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const addNote = (e) => {
//     e.preventDefault();
//     setNotes([
//       ...notes,
//       {
//         ...newNotes,
//         submissionTime: "",
//         grade: "",
//         submittedCount: 0,
//         checkedCount: 0,
//       },
//     ]);
//     setNewNotes({ title: "", conditionLink: "", deadline: "" });
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="page">
//         <Sidepanel ourPage="materials" />
//         <div className="HWTitle">
//           {" "}
//           // Исправить
//           <h1>{subject.name} - Материалы</h1>
//           {role === false && (
//             <form onSubmit={addNote}>
//               <input
//                 type="text"
//                 name="title"
//                 value={newNotes.title}
//                 onChange={handleInputChange}
//                 placeholder="Название"
//                 required
//               />
//               <input
//                 type="date"
//                 name="deadline"
//                 value={newNotes.deadline}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="file"
//                 accept="application/pdf"
//                 onChange={handleFileChange}
//                 required
//               />
//               <button type="submit">Прикрепить новый материал</button>
//             </form>
//           )}
//         </div>
//         <div className="tableArea">
//           {" "}
//           // Исправить
//           <table id="HWTable">
//             {" "}
//             // Исправить
//             <thead>
//               <tr>
//                 <th>Номер</th>
//                 <th>Название</th>
//                 <th>Описание</th>
//                 <th>Ссылка</th>
//                 <th>Кнопка Прикрепить</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notes.map((note, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{note.title}</td>
//                   <td>
//                     <a
//                       href={note.conditionLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Материал
//                     </a>
//                   </td>
//                   {role === false && (
//                     <>
//                       <td>
//                         <button>Редактировать</button>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MaterialsPage;
