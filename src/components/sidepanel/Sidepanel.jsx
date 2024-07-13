// Предметы в боковой панеле пока что появляются только локально.
// Для лучшей проверки нужен сервер, либо использовать Postman, который я не знаю,
// либо подключать базу данных с предметами.
// А вообще надо улучшить добавление предметов, потому что группы надо привязывать к предметам.

import React, { useEffect, useState } from "react";
import "./Sidepanel.css";
import Item from "../item/Item";
import Button from "../../pages/login/button/Button";

import "../subjects/Subjects";
import { transliterate } from "../subjects/Transliteration";

const Sidepanel = () => {
  const disciplines1 = JSON.parse(localStorage.getItem("disciplines")) || [];

  const addSubject = (name, linkName) => {
    disciplines1.push({ name, linkName });
    localStorage.setItem("disciplines", JSON.stringify(disciplines1));
  };

  const [showInput, setShowInput] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    const savedSubjects = JSON.parse(localStorage.getItem("disciplines"));

    if (savedSubjects) {
      disciplines.splice(0, disciplines.length, ...savedSubjects);
    }
    setDisciplines(savedSubjects);
    //   axios
    //     .get("http://localhost:3000/subjects")
    //     .then((response) => {
    //       setDisciplines(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("There was an error fetching the subjects!", error);
    //     });
  }, [disciplines]);

  // useEffect(() => {
  //   localStorage.setItem("disciplines", JSON.stringify(disciplines));
  // }, [disciplines]);

  const handleAddClick = () => {
    setShowInput(true);
  };

  const handleCreateClick = () => {
    if (subjectName.trim() !== "") {
      const subjectLink = `/${transliterate(subjectName)}`;
      // axios
      //   .post("http://localhost:3000/subjects", {
      //     name: subjectName,
      //     linkName: subjectLink,
      //   })
      //   .then((response) => {
      //     setDisciplines([...disciplines, response.data]);
      //     setShowInput(false);
      //     setSubjectName("");
      //   })
      //   .catch((error) => {
      //     console.error("There was an error creating the subject!", error);
      //   });
      const newDisciplines = [
        ...disciplines,
        { name: subjectName, linkName: subjectLink },
      ];
      setDisciplines(newDisciplines);
      localStorage.setItem("disciplines", JSON.stringify(newDisciplines));
      addSubject(subjectName, subjectLink);
      setShowInput(false);
      setSubjectName("");
    } else {
      alert("Название предмета должно быть введено обязательно");
    }
  };
  return (
    <div className="sidepanel">
      <div>
        {!showInput && (
          <Button text="Добавить предмет" onClick={handleAddClick} />
        )}
        {showInput && (
          <div>
            <input
              type="text"
              placeholder="Название предмета"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
            <Button text="Создать предмет" onClick={handleCreateClick} />
          </div>
        )}
      </div>
      <menu>
        {disciplines.map((discipline) => (
          <Item name={discipline.name} linkName={discipline.linkName} />
        ))}
      </menu>
    </div>
  );
};

export default Sidepanel;
