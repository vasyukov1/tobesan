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

//   // Закомменчено, потому что нигде не используется пока что и выдаётся ворнинг

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setNewNote({ ...newNote, [name]: value });
//   // };

//   // const handleFileChange = (e) => {
//   //   const file = e.target.files[0];
//   //   setNewNote({ ...newNote, file });
//   // };

//   const addNote = (note) => {
//     // Создание нового объекта заметки
//     const newNoteData = {
//       title: note.title,
//       description: note.description,
//       file: note.file,
//     };

//     // Добавление новой заметки в массив заметок
//     setNotes([...notes, newNoteData]);
//     setNewNote({ title: "", description: "", file: null });
//     closeModal();
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
//         <div>
//           <ol>
//             {notes.map((note, _) => (
//               <li>
//                 <a href="">{note.title}</a> {/* Здесь будет ссылка на лекцию */}
//               </li>
//             ))}
//           </ol>
//         </div>
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
//     const savedNotes = localStorage.getItem(`notes_${subjectName}`);
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
//     localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
//   }, [notes, subjectName]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   const addNote = (note) => {
//     const newNoteData = {
//       title: note.title,
//       description: note.description,
//       file: URL.createObjectURL(note.file),
//     };

//     setNotes([...notes, newNoteData]);
//     setNewNote({ title: "", description: "", file: null });
//     closeModal();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
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
//                     <a href={note.file} download>
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
//       <Footer />
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

//   // Move the conditional logic outside of the hook calls
//   let subject,
//     notes,
//     setNotes,
//     newNote,
//     setNewNote,
//     isModalOpen,
//     setIsModalOpen;

//   if (subjectName) {
//     subject = subjects[subjectName];
//     const [notesState, setNotesState] = useState(() => {
//       const savedNotes = localStorage.getItem(`notes_${subjectName}`);
//       return savedNotes ? JSON.parse(savedNotes) : [];
//     });
//     notes = notesState;
//     setNotes = setNotesState;

//     const [newNoteState, setNewNoteState] = useState({
//       title: "",
//       description: "",
//       file: null,
//       author: "",
//     });
//     newNote = newNoteState;
//     setNewNote = setNewNoteState;

//     const [isModalOpenState, setIsModalOpenState] = useState(false);
//     isModalOpen = isModalOpenState;
//     setIsModalOpen = setIsModalOpenState;

//     useEffect(() => {
//       localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
//     }, [notes, subjectName]);
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   const addNote = (note) => {
//     const newNoteData = {
//       title: note.title,
//       description: note.description,
//       file: URL.createObjectURL(note.file),
//       author: note.author,
//     };

//     setNotes([...notes, newNoteData]);
//     setNewNote({ title: "", description: "", file: null, author: "" });
//     closeModal();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openFile = (fileUrl) => {
//     window.open(fileUrl, "_blank");
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel ourPage="materials" />
//         {subjectName ? (
//           <>
//             <h1>{subject.name} - Конспекты</h1>
//             {localStorage.getItem("role") === "teacher" && (
//               <button onClick={openModal}>Добавить материалы</button>
//             )}
//             <table>
//               <thead>
//                 <tr>
//                   <th>Номер</th>
//                   <th>Название</th>
//                   <th>Описание</th>
//                   <th>Автор</th>
//                   <th>Файл</th>
//                   {localStorage.getItem("role") === "teacher" && (
//                     <th>Редактировать</th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {notes.map((note, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{note.title}</td>
//                     <td>{note.description}</td>
//                     <td>{note.author}</td>
//                     <td>
//                       {note.file && (
//                         <button onClick={() => openFile(note.file)}>
//                           Open
//                         </button>
//                       )}
//                     </td>
//                     {localStorage.getItem("role") === "teacher" && (
//                       <td>Редактировать</td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         ) : (
//           <div>Subject not found</div>
//         )}
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <AddNoteModal onClose={closeModal} onAddNote={addNote} />
//       </Modal>
//       <Footer />
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
//     const savedNotes = localStorage.getItem(`notes_${subjectName}`);
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });
//   const [newNote, setNewNote] = useState({
//     title: "",
//     description: "",
//     file: null,
//     author: "",
//   });
//   const role = localStorage.getItem("role");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
//   }, [notes, subjectName]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   const addNote = (note) => {
//     const newNoteData = {
//       title: note.title,
//       description: note.description,
//       file: URL.createObjectURL(note.file),
//       author: note.author,
//     };

//     setNotes([...notes, newNoteData]);
//     setNewNote({ title: "", description: "", file: null, author: "" });
//     closeModal();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
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
//               <th>Автор</th>
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
//                 <td>{note.author}</td>
//                 <td>
//                   {note.file && (
//                     <a href={note.file} download>
//                       <button>Download</button>
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
//       <Footer />
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
// import "./MaterialsPage.css";

// const MaterialsPage = ({ subjects }) => {
//   const { subjectName } = useParams();
//   const subject = subjects[subjectName];
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem(`notes_${subjectName}`);
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
//     localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
//   }, [notes, subjectName]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   const addNote = (note) => {
//     const newNoteData = {
//       title: note.title,
//       description: note.description,
//       file: note.file,
//     };

//     setNotes([...notes, newNoteData]);
//     setNewNote({ title: "", description: "", file: null });
//     closeModal();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel ourPage="materials" />
//         <h1>{subject.name} - Конспекты</h1>
//         {role === "teacher" && (
//           <button className="materialsPage" onClick={openModal}>
//             Добавить материалы
//           </button>
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
//                   {note.file instanceof File && (
//                     <a
//                       href={URL.createObjectURL(note.file)}
//                       download={note.file.name}
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
//       <Footer />
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
//     const savedNotes = localStorage.getItem(`notes_${subjectName}`);
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });
//   const [newNote, setNewNote] = useState({
//     title: "",
//     description: "",
//     conditionLink: "",
//     file: null,
//   });
//   const role = localStorage.getItem("role");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
//   }, [notes, subjectName]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewNote({ ...newNote, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewNote({ ...newNote, file });
//   };

//   const addNote = (note) => {
//     const newNoteData = {
//       title: note.title,
//       description: note.description,
//       conditionLink: note.conditionLink, // добавляем ссылку на файл
//       file: note.file,
//     };

//     setNotes([...notes, newNoteData]);
//     setNewNote({ title: "", description: "", conditionLink: "", file: null });
//     closeModal();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   //return

//   return (
//     <div>
//       <Header />
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
//               <th>Ссылка на условие</th>
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
//                   {note.conditionLink && (
//                     <a
//                       href={note.conditionLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Условие
//                     </a>
//                   )}
//                 </td>
//                 <td>
//                   {note.file instanceof File && (
//                     <a
//                       href={URL.createObjectURL(note.file)}
//                       download={note.file.name}
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
//       <Footer />
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <AddNoteModal
//           onClose={closeModal}
//           onAddNote={addNote}
//           handleInputChange={handleInputChange}
//           handleFileChange={handleFileChange}
//           newNote={newNote}
//         />
//       </Modal>
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
    const savedNotes = localStorage.getItem(`notes_${subjectName}`);
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    conditionLink: "",
    file: null,
  });
  const role = localStorage.getItem("role");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(`notes_${subjectName}`, JSON.stringify(notes));
  }, [notes, subjectName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewNote({ ...newNote, file });
  };

  const addNote = (note) => {
    const newNoteData = {
      title: note.title,
      description: note.description,
      conditionLink: note.conditionLink,
      file: note.file,
    };

    setNotes([...notes, newNoteData]);
    setNewNote({ title: "", description: "", conditionLink: "", file: null });
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
        <h1>{subject.name} - Конспекты</h1>
        {role === "teacher" && (
          <button onClick={openModal}>Добавить материалы</button>
        )}
        <table>
          <thead>
            <tr>
              <th>Номер</th>
              <th>Название</th>
              <th>Описание</th>
              <th>Ссылка на условие</th>
              <th>Файл</th>
              {role === "teacher" && <th>Редактировать</th>}
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>
                  {true && ( // note.conditionLink
                    <a
                      href="https://t.me"
                      // href={note.conditionLink}
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      Условие
                    </a>
                  )}
                </td>
                <td>
                  {note.file instanceof File && (
                    <a
                      href={URL.createObjectURL(note.file)}
                      download={note.file.name}
                    >
                      <i className="fas fa-download"></i>
                    </a>
                  )}
                </td>
                {role === "teacher" && <td>Редактировать</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNoteModal
          onClose={closeModal}
          onAddNote={addNote}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          newNote={newNote}
        />
      </Modal>
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
//     setNewHomework({ ...newHomework, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setNewHomework({ ...newHomework, conditionLink: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const addHomework = (e) => {
//     e.preventDefault();
//     setHomeworks([
//       ...homeworks,
//       {
//         ...newHomework,
//         submissionTime: "",
//         grade: "",
//         submittedCount: 0,
//         checkedCount: 0,
//       },
//     ]);
//     setNewHomework({ title: "", conditionLink: "", deadline: "" });
//   };

//   const submitHomework = (index) => {
//     // Логика для сдачи домашнего задания
//   };

//   const markAsDone = (index) => {
//     // Логика для отметки домашнего задания как выполненного
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="page">
//         <Sidepanel ourPage="homework" />
//         <div className="HWTitle">
//           <h1>{subject.name} - Домашние задания</h1>
//           {role === "teacher" && (
//             <form onSubmit={addHomework}>
//               <input
//                 type="text"
//                 name="title"
//                 value={newHomework.title}
//                 onChange={handleInputChange}
//                 placeholder="Название задания"
//                 required
//               />
//               <input
//                 type="date"
//                 name="deadline"
//                 value={newHomework.deadline}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="file"
//                 accept="application/pdf"
//                 onChange={handleFileChange}
//                 required
//               />
//               <button type="submit">Задать новое дз</button>
//             </form>
//           )}
//         </div>
//         <div className="tableArea">
//           <table id="HWTable">
//             <thead>
//               <tr>
//                 <th>Номер</th>
//                 <th>Название дз</th>
//                 <th>Ссылка на условие</th>
//                 <th>Кнопка сдать</th>
//                 <th>Дедлайн</th>
//                 <th>Кнопка "done"</th>
//                 <th>Время сдачи</th>
//                 <th>Оценка</th>
//                 {role === "teacher" && (
//                   <>
//                     <th>Количество сдавших</th>
//                     <th>Количество проверенных</th>
//                     <th>Редактировать дз</th>
//                   </>
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {homeworks.map((homework, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{homework.title}</td>
//                   <td>
//                     <a
//                       href={homework.conditionLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Условие
//                     </a>
//                   </td>
//                   <td>
//                     <button onClick={() => submitHomework(index)}>Сдать</button>
//                   </td>
//                   <td>{homework.deadline}</td>
//                   <td>
//                     <button onClick={() => markAsDone(index)}>Done</button>
//                   </td>
//                   <td>{homework.submissionTime}</td>
//                   <td>{homework.grade}</td>
//                   {role === "teacher" && (
//                     <>
//                       <td>{homework.submittedCount}</td>
//                       <td>{homework.checkedCount}</td>
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
