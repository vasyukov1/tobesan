// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Footer from "../../../components/footer/Footer";
// import Header from "../../../components/header/Header";
// import Sidepanel from "../../../components/sidepanel/Sidepanel";

// // Это скопипащенная страница дз

// const MaterialsPage = ({ subjects }) => {
//   const { subjectName } = useParams();
//   const subject = subjects[subjectName];
//   const [homeworks, setHomeworks] = useState(() => {
//     const savedHomeworks = localStorage.getItem("homeworks");
//     return savedHomeworks ? JSON.parse(savedHomeworks) : [];
//   });
//   const [newHomework, setNewHomework] = useState({
//     title: "",
//     conditionLink: "",
//     deadline: "",
//   });
//   const role = localStorage.getItem("role");

//   useEffect(() => {
//     localStorage.setItem("homeworks", JSON.stringify(homeworks));
//   }, [homeworks]);

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
//         <Sidepanel />
//         <h1>{subject.name} - Домашние задания</h1>
//         {role === "teacher" && (
//           <form onSubmit={addHomework}>
//             <input
//               type="text"
//               name="title"
//               value={newHomework.title}
//               onChange={handleInputChange}
//               placeholder="Название задания"
//               required
//             />
//             <input
//               type="date"
//               name="deadline"
//               value={newHomework.deadline}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="file"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               required
//             />
//             <button type="submit">Задать новое дз</button>
//           </form>
//         )}
//         <table>
//           <thead>
//             <tr>
//               <th>Номер</th>
//               <th>Название дз</th>
//               <th>Ссылка на условие</th>
//               <th>Кнопка сдать</th>
//               <th>Дедлайн</th>
//               <th>Кнопка "done"</th>
//               <th>Время сдачи</th>
//               <th>Оценка</th>
//               {role === "teacher" && (
//                 <>
//                   <th>Количество сдавших</th>
//                   <th>Количество проверенных</th>
//                   <th>Редактировать дз</th>
//                 </>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {homeworks.map((homework, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{homework.title}</td>
//                 <td>
//                   <a
//                     href={homework.conditionLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Условие
//                   </a>
//                 </td>
//                 <td>
//                   <button onClick={() => submitHomework(index)}>Сдать</button>
//                 </td>
//                 <td>{homework.deadline}</td>
//                 <td>
//                   <button onClick={() => markAsDone(index)}>Done</button>
//                 </td>
//                 <td>{homework.submissionTime}</td>
//                 <td>{homework.grade}</td>
//                 {role === "teacher" && (
//                   <>
//                     <td>{homework.submittedCount}</td>
//                     <td>{homework.checkedCount}</td>
//                     <td>
//                       <button>Редактировать</button>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MaterialsPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Sidepanel from "../../../components/sidepanel/Sidepanel";
import Modal from "../../../functions/modal/Modal";
import AddNoteModal from "../../../functions/addNoteModal/AddNoteModal";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewNote({ ...newNote, file });
  };

  // const addNote = (e) => {
  //   e.preventDefault();
  //   setNotes([...notes, newNote]);
  //   setNewNote({ title: "", description: "", file: null });
  //   closeModal();
  // };

  const addNote = async (e) => {
    e.preventDefault();

    // Create a new FormData object and append the note data to it
    const formData = new FormData();
    formData.append("title", newNote.title);
    formData.append("description", newNote.description);
    formData.append("file", newNote.file);

    try {
      // Send a POST request to the server to add the new note
      const response = await fetch("/api/notes", {
        method: "POST",
        body: formData,
      });

      // Parse the response data as JSON
      const data = await response.json();

      // Update the state with the new note data
      setNotes([...notes, data]);

      // Clear the new note form
      setNewNote({ title: "", description: "", file: null });

      // Close the modal
      closeModal();
    } catch (error) {
      console.error(error);
      // Handle the error
    }
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
        <Sidepanel />
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
                  {note.file && (
                    <a
                      href={URL.createObjectURL(note.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Скачать
                    </a>
                  )}
                </td>
                {role === "teacher" && <td>Редактировать</td>}
              </tr>
            ))}
          </tbody>
        </table>
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
