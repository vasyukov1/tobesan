// // src/components/addMaterialModal/AddMaterialModal.jsx
// import React, { useState, useContext } from "react";
// import { NotesContext } from "../context/NotesContext";
// import { AuthContext } from "../context/AuthContext"; // Исправлен путь
// //import "./AddMaterialModal.css";

// const AddMaterialModal = ({ onClose }) => {
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const { notes, setNotes } = useContext(NotesContext);
//   const { user } = useContext(AuthContext); // Получаем информацию о пользователе

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = () => {
//     if (!date || !title || !description || !file) {
//       alert("Все поля должны быть заполнены.");
//       return;
//     }

//     if (!user /*|| user.role !== "teacher"*/) {
//       alert("Только авторизованные пользователи с ролью 'teacher' могут добавлять материалы.");
//       return;
//     }

//     const newNote = {
//       date,
//       title,
//       description,
//       file,
//     };

//     setNotes([...notes, newNote]);
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Добавить материал</h2>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Наименование материала"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Описание материала"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input type="file" accept=".pdf" onChange={handleFileChange} />
//         <button onClick={handleSubmit}>Опубликовать</button>
//       </div>
//     </div>
//   );
// };

// export default AddMaterialModal;


// src/components/addMaterialModal/AddMaterialModal.jsx
import React, { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { AuthContext } from "../context/AuthContext"; // Исправлен путь
//import "./AddMaterialModal.css";

const AddMaterialModal = ({ onClose }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { notes, setNotes } = useContext(NotesContext);
  const { user } = useContext(AuthContext); // Получаем информацию о пользователе

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!date || !title || !description || !file) {
      alert("Все поля должны быть заполнены.");
      return;
    }

    // if (!user) {
    //   alert("Только авторизованные пользователи могут добавлять материалы.");
    //   return;
    // }

    const newNote = {
      date,
      title,
      description,
      file,
    };

    setNotes([...notes, newNote]);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Добавить материал</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Наименование материала"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Описание материала"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Опубликовать</button>
      </div>
    </div>
  );
};

export default AddMaterialModal;
