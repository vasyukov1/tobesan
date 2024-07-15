// import React, { useState } from "react";
// import "./AddNoteModal.css";

// const AddNoteModal = ({ onClose }) => {
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = () => {
//     if (!date || !title || !description || !file) {
//       alert("Все поля должны быть заполнены.");
//       return;
//     }

//     // Логика для сохранения конспекта
//     console.log({ date, title, description, file });

//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Добавить конспект</h2>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Наименование конспекта"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Описание конспекта"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input type="file" accept=".pdf,video/*" onChange={handleFileChange} />
//         <button onClick={handleSubmit}>Опубликовать</button>
//       </div>
//     </div>
//   );
// };

// export default AddNoteModal;


// import React, { useState } from "react";
// import "./AddNoteModal.css";

// const AddNoteModal = ({ onClose, onAddNote }) => {
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = () => {
//     if (!date || !title || !description || !file) {
//       alert("Все поля должны быть заполнены.");
//       return;
//     }

//     const newNote = {
//       date,
//       title,
//       description,
//       file,
//     };

//     onAddNote(newNote);
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Добавить конспект</h2>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Наименование конспекта"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Описание конспекта"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input type="file" accept=".pdf,video/*" onChange={handleFileChange} />
//         <button onClick={handleSubmit}>Опубликовать</button>
//       </div>
//     </div>
//   );
// };

// export default AddNoteModal;

// AddNoteModal.jsx


// import React, { useState, useContext } from "react";
// import { NotesContext } from "../components/context/NotesContext";
// import { AuthContext } from "../components/context/AuthContext"; // Добавляем AuthContext
// import "./AddNoteModal.css";

// const AddNoteModal = ({ onClose }) => {
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

//     if (!user || user.role !== "teacher") {
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
//         <h2>Добавить конспект</h2>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Наименование конспекта"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Описание конспекта"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input type="file" accept=".pdf" onChange={handleFileChange} />
//         <button onClick={handleSubmit}>Опубликовать</button>
//       </div>
//     </div>
//   );
// };

// export default AddNoteModal;

// src/components/addNoteModal/AddNoteModal.jsx
// import React, { useState, useContext } from "react";
// import { NotesContext } from "../context/NotesContext";
// import { AuthContext } from "../context/AuthContext"; // Исправлен путь
// import "./AddNoteModal.css";

// const AddNoteModal = ({ onClose }) => {
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
//         <h2>Добавить конспект</h2>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Наименование конспекта"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Описание конспекта"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input type="file" accept=".pdf" onChange={handleFileChange} />
//         <button onClick={handleSubmit}>Опубликовать</button>
//       </div>
//     </div>
//   );
// };

// export default AddNoteModal;


// // src/components/addMaterialModal/AddMaterialModal.jsx
// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const AddMaterialModal = ({ onClose }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     return <div>Пожалуйста, войдите в систему.</div>;
//   }

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Добавить конспект</h2>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Наименование конспекта"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Описание конспекта"
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

// import React, { useState } from 'react';

// const AddNoteModal = () => {
//   const [date, setDate] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Проверка, что все поля заполнены
//     if (!date || !title || !description || !file) {
//       alert('Пожалуйста, заполните все поля.');
//       return;
//     }

//     // Создание объекта FormData для отправки данных
//     const formData = new FormData();
//     formData.append('date', date);
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('file', file);

//     // Отправка данных на сервер
//     fetch('/api/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Успех:', data);
//         alert('Материал успешно добавлен!');
//         // Очистка полей формы после успешной отправки
//         setDate('');
//         setTitle('');
//         setDescription('');
//         setFile(null);
//       })
//       .catch((error) => {
//         console.error('Ошибка:', error);
//         alert('Произошла ошибка при добавлении материала.');
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </label>
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <label>
//           File:
//           <input type="file" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddNoteModal;

// import React, { useState } from 'react';

// const AddNoteModal = () => {
//   const [date, setDate] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Проверка, что все поля заполнены
//     if (!date || !title || !description || !file) {
//       alert('Пожалуйста, заполните все поля.');
//       return;
//     }

//     // Создание объекта FormData для отправки данных
//     const formData = new FormData();
//     formData.append('date', date);
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('file', file);

//     // Отправка данных на сервер
//     fetch('/api/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Успех:', data);
//         alert('Материал успешно добавлен!');
//         // Очистка полей формы после успешной отправки
//         setDate('');
//         setTitle('');
//         setDescription('');
//         setFile(null);
//       })
//       .catch((error) => {
//         console.error('Ошибка:', error);
//         alert('Произошла ошибка при добавлении материала.');
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         </label>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </label>
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <label>
//           File:
//           <input type="file" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddNoteModal;


import React, { useState } from 'react';

const AddNoteModal = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка, что все поля заполнены
    if (!date || !title || !description || !file) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    // Создание объекта FormData для отправки данных
    const formData = new FormData();
    formData.append('date', date);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    // Отправка данных на сервер
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Успех:', data);
        alert('Материал успешно добавлен!');
        // Очистка полей формы после успешной отправки
        setDate('');
        setTitle('');
        setDescription('');
        setFile(null);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при добавлении материала.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          File:
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNoteModal;

