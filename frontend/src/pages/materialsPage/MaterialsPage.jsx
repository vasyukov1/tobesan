// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Modal from "../../functions/modal/Modal";
// import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";

// const MaterialsPage = ({ subjects }) => {
//   const { subjectName } = useParams();
//   const subject = subjects[subjectName];
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });
//   const [newNote, setNewNote] = useState({
//     title: "",
//     description: "",
//     file: null,
//   });
//   const role = localStorage.getItem("role");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   // const addNote = (e) => {
//   //   e.preventDefault();
//   //   setNotes([...notes, newNote]);
//   //   setNewNote({ title: "", description: "", file: null });
//   //   closeModal();
//   // };

//   const addNote = async (e) => {
//     e.preventDefault();

//     // Create a new FormData object and append the note data to it
//     const formData = new FormData();
//     formData.append("title", newNote.title);
//     formData.append("description", newNote.description);
//     formData.append("file", newNote.file);

//     try {
//       // Send a POST request to the server to add the new note
//       const response = await fetch("/api/notes", {
//         method: "POST",
//         body: formData,
//       });

//       // Parse the response data as JSON
//       const data = await response.json();

//       // Update the state with the new note data
//       setNotes([...notes, data]);

//       // Clear the new note form
//       setNewNote({ title: "", description: "", file: null });

//       // Close the modal
//       closeModal();
//     } catch (error) {
//       console.error(error);
//       // Handle the error
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="page">
//         <Sidepanel />
//         <h1>{subject.name} - Конспекты</h1>
//         {role === "teacher" && (
//           <button onClick={openModal}>Добавить материалы</button>
//         )}
//         <table>
//           <thead>
//             <tr>
//               <th>Номер</th>
//               <th>Название</th>
//               <th>Описание</th>
//               <th>Файл</th>
//               {role === "teacher" && <th>Редактировать</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {notes.map((note, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{note.title}</td>
//                 <td>{note.description}</td>
//                 <td>
//                   {note.file && (
//                     <a
//                       href={URL.createObjectURL(note.file)}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Скачать
//                     </a>
//                   )}
//                 </td>
//                 {role === "teacher" && <td>Редактировать</td>}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <AddNoteModal onClose={closeModal} onAddNote={addNote} />
//       </Modal>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MaterialsPage;

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
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });
//   const [newNote, setNewNote] = useState({
//     title: "",
//     description: "",
//     file: null,
//   });
//   const role = localStorage.getItem("role");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   const addNote = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", newNote.title);
//     formData.append("description", newNote.description);
//     formData.append("file", newNote.file);

//     try {
//       const response = await fetch("/api/notes", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       setNotes([...notes, data]);

//       setNewNote({ title: "", description: "", file: null });

//       closeModal();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="page">
//         <Sidepanel ourPage="materials" />
//         <h1>{subject.name} - Конспекты</h1>
//         {role === "teacher" && (
//           <button onClick={openModal}>Добавить материалы</button>
//         )}
//         <table>
//           <thead>
//             <tr>
//               <th>Номер</th>
//               <th>Название</th>
//               <th>Описание</th>
//               <th>Файл</th>
//               {role === "teacher" && <th>Редактировать</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {notes.map((note, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{note.title}</td>
//                 <td>{note.description}</td>
//                 <td>
//                   {note.file && (
//                     <a
//                       href={URL.createObjectURL(note.file)}
//                       download={note.file.name}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         const link = e.currentTarget;
//                         link.click();
//                       }}
//                     >
//                       <i className="fas fa-download"></i>
//                     </a>
//                   )}
//                 </td>
//                 {role === "teacher" && <td>Редактировать</td>}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <AddNoteModal onClose={closeModal} onAddNote={addNote} />
//       </Modal>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MaterialsPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Modal from "../../functions/modal/Modal";
import AddNoteModal from "../../functions/addNoteModal/AddNoteModal";
import Footer from "../../components/footer/Footer";

const MaterialsPage = ({ subjects }) => {
  const { subjectName } = useParams();
  const subject = subjects[subjectName];
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
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
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Закомменчено, потому что нигде не используется пока что и выдаётся ворнинг

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewNote({ ...newNote, [name]: value });
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setNewNote({ ...newNote, file });
  // };

  const addNote = (note) => {
    // Создание нового объекта заметки
    const newNoteData = {
      title: note.title,
      description: note.description,
      file: note.file,
    };

    // Добавление новой заметки в массив заметок
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
      <div>
        <Header />
      </div>
      <div className="page">
        <Sidepanel ourPage="materials" />
        <h1>{subject.name} - Конспекты</h1>
        {role === "teacher" && (
          <button onClick={openModal}>Добавить материалы</button>
        )}
        <div>
          <ol>
            {notes.map((note, _) => (
              <li>
                <a href="">{note.title}</a> {/* Здесь будет ссылка на лекцию */}
              </li>
            ))}
          </ol>
        </div>
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
