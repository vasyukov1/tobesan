// // src/components/subjects/algebra/Algebra.jsx
// import React, { useState } from 'react';
// import AddNoteModal from '../../addNoteModal/AddNoteModal'; // Обновленный путь

// const Algebra = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Алгебра</h1>
//       <button onClick={openModal}>Добавить материал</button>
//       {isModalOpen && <AddNoteModal onClose={closeModal} />}
//       {/* Здесь будут отображаться добавленные материалы */}
//     </div>
//   );
// };

// export default Algebra;

// src/components/subjects/algebra/Algebra.jsx
// import React, { useState } from 'react';
// import AddNoteModal from '../../addNoteModal/AddNoteModal';

// const Algebra = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Алгебра</h1>
//       <button onClick={openModal}>Добавить материал</button>
//       {isModalOpen && <AddNoteModal onClose={closeModal} />}
//       {/* Здесь будут отображаться добавленные материалы */}
//     </div>
//   );
// };

// export default Algebra;

// src/components/subjects/algebra/Algebra.jsx
// import React, { useState } from 'react';
// import AddMaterialModal from '../../addMaterialModal/AddMaterialModal'; // Обновленный путь

// const Algebra = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Алгебра</h1>
//       <button onClick={openModal}>Добавить материал</button>
//       {isModalOpen && <AddMaterialModal onClose={closeModal} />}
//       {/* Здесь будут отображаться добавленные материалы */}
//     </div>
//   );
// };

// export default Algebra;

// src/components/subjects/algebra/Algebra.jsx
// import React, { useContext, useState } from "react";
// import { NotesContext } from "../../context/NotesContext";
// import AddNoteModal from "../../addNoteModal/AddNoteModal";



// const Algebra = () => {
//   const { notes } = useContext(NotesContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Algebra Materials</h1>
//       <button onClick={handleOpenModal}>Add Material</button>
//       <AddNoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
//       {notes.length === 0 ? (
//         <p>No materials available.</p>
//       ) : (
//         <ul>
//           {notes.map((note, index) => (
//             <li key={index}>
//               <h3>{note.title}</h3>
//               <p>{note.description}</p>
//               <a href={URL.createObjectURL(note.file)} download>
//                 Download {note.file.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Algebra;

import React, { useState } from 'react';
import AddNoteModal from '../../addNoteModal/AddNoteModal';
import Modal from '../modal/Modal';

const Algebra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Algebra</h1>
      <button onClick={openModal}>Add Material</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNoteModal />
      </Modal>
    </div>
  );
};

export default Algebra;

