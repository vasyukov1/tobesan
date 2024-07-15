// import React from "react";
// import Item from "../item/Item";
// import { Link } from "react-router-dom";
// import "./Sidepanel.css";

// const Sidepanel = () => {
//   return (
//     <div className="sidepanel">
//       <div className="sidepanel__title">
//         <h1>Конспекты</h1>
//       </div>
//       <div className="block algebra">
//         <Link to="/algebra">
//           <Item text="Алгебра" />
//         </Link>
//       </div>
//       <div className="block matan">
//         <Link to="/matan">
//           <Item text="Матан" />
//         </Link>
//       </div>
//       <div className="block discra">
//         <Link to="/discra">
//           <Item text="Дискра" />
//         </Link>
//       </div>
//       <div className="block c">
//         <Link to="/c">
//           <Item text="C" />
//         </Link>
//       </div>
//       <div className="block csharp">
//         <Link to="/csharp">
//           <Item text="C#" />
//         </Link>
//       </div>
//       <div className="block cplusplus">
//         <Link to="/cplusplus">
//           <Item text="C++" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidepanel;

// import React from "react";
// import Item from "../item/Item";
// import { Link } from "react-router-dom";
// import "./Sidepanel.css";

// const Sidepanel = () => {
//   const notes = [
//     { name: "Алгебра", link: "/algebra", file: "algebra.pdf" },
//     { name: "Матан", link: "/matan", file: "matan.pdf" },
//     { name: "Дискра", link: "/discra", file: "discra.pdf" },
//     { name: "C", link: "/c", file: "c.pdf" },
//     { name: "C#", link: "/csharp", file: "csharp.pdf" },
//     { name: "C++", link: "/cplusplus", file: "cplusplus.pdf" },
//   ];

//   return (
//     <div className="sidepanel">
//       <div className="sidepanel__title">
//         <h1>Конспекты</h1>
//       </div>
//       {notes.map((note, index) => (
//         <div key={index} className="block">
//           <Link to={note.link}>
//             <Item text={note.name} />
//           </Link>
//           <a href={note.file} download>
//             <button className="download-button">Скачать</button>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidepanel;

// import React from "react";
// import Item from "../item/Item";
// import { Link } from "react-router-dom";
// import "./Sidepanel.css";

// const Sidepanel = ({ notes }) => {
//   return (
//     <div className="sidepanel">
//       <div className="sidepanel__title">
//         <h1>Конспекты</h1>
//       </div>
//       {notes.map((note, index) => (
//         <div key={index} className="block">
//           <Link to={note.link}>
//             <Item text={note.title} />
//           </Link>
//           <a href={note.file} download>
//             <button className="download-button">Скачать</button>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidepanel;

// import React from "react";
// import Item from "../item/Item";
// import { Link } from "react-router-dom";
// import "./Sidepanel.css";

// const Sidepanel = ({ notes }) => {
//   // Убедитесь, что notes имеет значение по умолчанию пустого массива
//   const notesList = notes || [];

//   return (
//     <div className="sidepanel">
//       <div className="sidepanel__title">
//         <h1>Конспекты</h1>
//       </div>
//       {notesList.map((note, index) => (
//         <div key={index} className="block">
//           <Link to={note.link}>
//             <Item text={note.title} />
//           </Link>
//           <a href={note.file} download>
//             <button className="download-button">Скачать</button>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidepanel;

import React, { useContext, useEffect } from "react";
import Item from "../item/Item";
import { Link } from "react-router-dom";
import "./Sidepanel.css";
import { NotesContext } from "../context/NotesContext";

const Sidepanel = () => {
  const { notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    // Загрузка конспектов из localStorage при монтировании компонента
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, [setNotes]);

  useEffect(() => {
    // Сохранение конспектов в localStorage при их изменении
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="sidepanel">
      <div className="sidepanel__title">
        <h1>Конспекты</h1>
      </div>
      {notes.map((note, index) => (
        <div key={index} className="block">
          <Link to={note.link}>
            <Item text={note.title} />
          </Link>
          <a href={note.file} download>
            <button className="download-button">Скачать</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidepanel;
