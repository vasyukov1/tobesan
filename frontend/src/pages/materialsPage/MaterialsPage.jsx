import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Modal from "../../functions/modal/Modal";
import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
import Footer from "../../components/footer/Footer";
import "./MaterialsPage.css";
import "../login/Login.css";

const MaterialsPage = ({ subjects }) => {
  const { subjectName } = useParams();
  const subject = subjects[subjectName];

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(`notes_${subjectName}`);
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState({
    title: "",
    url: "",
  });

  const role = localStorage.getItem("role");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
  // }, [notes, subjectName]);

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
      url: note.url,
    };
  };

  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel ourPage="materials" />
        <div className="naterialsPage">
          <div className="materialsTitle">
            <h1>{subject.name} - Конспекты</h1>
            {role === "false" && (
              <div>
                <button className="loginButton" onClick={openModal}>
                  Добавить материалы
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <AddNoteModal onClose={closeModal} onAddNote={addNote} />
                </Modal>
              </div>
            )}
          </div>
          <table>
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
              {notes.map((note, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{note.title}</td>
                  <td>{note.url}</td>
                  {role === "false" && (
                    <td>
                      <button>Редактировать</button>
                    </td>
                  )}
                  {role === "false" && (
                    <td>
                      <button>Удалить</button>
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
