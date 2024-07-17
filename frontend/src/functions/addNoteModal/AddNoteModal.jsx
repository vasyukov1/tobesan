// import React, { useState } from "react";

// const AddNoteModal = () => {
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Проверка, что все поля заполнены
//     if (!date || !title || !description || !file) {
//       alert("Пожалуйста, заполните все поля.");
//       return;
//     }

//     // Создание объекта FormData для отправки данных
//     const formData = new FormData();
//     formData.append("date", date);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("file", file);

//     // Отправка данных на сервер
//     fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Успех:", data);
//         alert("Материал успешно добавлен!");
//         // Очистка полей формы после успешной отправки
//         setDate("");
//         setTitle("");
//         setDescription("");
//         setFile(null);
//       })
//       .catch((error) => {
//         console.error("Ошибка:", error);
//         alert("Произошла ошибка при добавлении материала.");
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <label>
//           File:
//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={handleFileChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddNoteModal;

import React, { useState } from "react";

const AddNoteModal = ({ onAddNote, onClose }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка, что все поля заполнены
    if (!date || !title || !description || !file) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Создание нового объекта заметки
    const newNote = {
      date,
      title,
      description,
      file,
    };

    // Вызов функции добавления заметки
    onAddNote(newNote);
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          File:
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNoteModal;
