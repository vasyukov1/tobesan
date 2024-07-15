// // import React from "react";
// // import Header from "../../components/header/Header";
// // import Footer from "../../components/footer/Footer";
// // import Sidepanel from "../../components/sidepanel/Sidepanel";
// // import Main from "../../components/main/Main";

// // const Materials = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <div className="page">
// //         <Sidepanel />
// //         <Main />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Materials;

// import React, { useState } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Main from "../../components/main/Main";
// import AddNoteModal from "../../components/addNoteModal/AddNoteModal";
// import { useSelector } from "react-redux";

// const Materials = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const isAuth = useSelector((state) => state.user.isAuth);
//   const userRole = useSelector((state) => state.user.role);

//   const handleOpenModal = () => {
//     if (isAuth && userRole === "teacher") {
//       setIsModalOpen(true);
//     } else {
//       alert("Только учителя могут добавлять конспекты.");
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel />
//         <Main />
//       </div>
//       <Footer />
//       <button onClick={handleOpenModal}>Добавить конспект</button>
//       {isModalOpen && <AddNoteModal onClose={handleCloseModal} />}
//     </div>
//   );
// };

// export default Materials;


// import React, { useState } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Main from "../../components/main/Main";
// import AddNoteModal from "../../components/addNoteModal/AddNoteModal";
// import { useSelector } from "react-redux";

// const Materials = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const isAuth = useSelector((state) => state.user.isAuth);

//   const handleOpenModal = () => {
//     if (isAuth) {
//       setIsModalOpen(true);
//     } else {
//       alert("Только авторизованные пользователи могут добавлять конспекты.");
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel />
//         <Main />
//       </div>
//       <Footer />
//       <button onClick={handleOpenModal}>Добавить конспект</button>
//       {isModalOpen && <AddNoteModal onClose={handleCloseModal} />}
//     </div>
//   );
// };

// export default Materials;


// import React, { useState } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Sidepanel from "../../components/sidepanel/Sidepanel";
// import Main from "../../components/main/Main";
// import AddNoteModal from "../../components/addNoteModal/AddNoteModal";
// import { useSelector } from "react-redux";

// const Materials = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notes, setNotes] = useState([]);
//   const isAuth = useSelector((state) => state.user.isAuth);

//   const handleOpenModal = () => {
//     if (isAuth) {
//       setIsModalOpen(true);
//     } else {
//       alert("Только авторизованные пользователи могут добавлять конспекты.");
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAddNote = (note) => {
//     setNotes([...notes, note]);
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page">
//         <Sidepanel notes={notes} />
//         <Main />
//       </div>
//       <Footer />
//       <button onClick={handleOpenModal}>Добавить конспект</button>
//       {isModalOpen && <AddNoteModal onClose={handleCloseModal} onAddNote={handleAddNote} />}
//     </div>
//   );
// };

// export default Materials;

// src/components/Materials.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './materials.css';

const Materials = () => {
  return (
    <div className="materials">
      <h1>Учебные материалы</h1>
      <div className="subjects">
        <Link to="/materials/algebra">
          <button>Алгебра</button>
        </Link>
        <Link to="/materials/discrete-math">
          <button>Дискретная математика</button>
        </Link>
        <Link to="/materials/calculus">
          <button>Математический анализ</button>
        </Link>
        <Link to="/materials/c">
          <button>C</button>
        </Link>
        <Link to="/materials/csharp">
          <button>C#</button>
        </Link>
        <Link to="/materials/cplusplus">
          <button>C++</button>
        </Link>
      </div>
    </div>
  );
};

export default Materials;
