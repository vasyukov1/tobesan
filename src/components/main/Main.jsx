import React from "react";
import SubjectPage from "../../pages/subjectPage/SubjectPage";

const Main = () => {
  const subjectInfo = {
    math: {
      name: "Математика",
      description: "Изучение чисел, формул и уравнений.",
    },
    physics: {
      name: "Физика",
      description: "Изучение законов природы и физических явлений.",
    },
    // Добавьте другие предметы по необходимости
  };
  return (
    <div>
      <SubjectPage subjectInfo={subjectInfo} />
      <p>
        Здесь будет главная страница. При авторизации студентом здесь появляются
        новости о выдаче дз, дедлайнах, проверке
      </p>
    </div>
  );
};

export default Main;
