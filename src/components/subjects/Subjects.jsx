import Input from "../../pages/login/input/Input";
import React, { useEffect, useState } from "react";

export const disciplines = [
  { name: "Алгебра", linkName: "/algebra" },
  { name: "Матан", linkName: "/matan" },
  { name: "C#", linkName: "/csharp" },
];

export const AddSubject = () => {
  return <div></div>;

  // const [subjectName, setSubjectName] = useState("subject");
  // const [subjectLink, setSubjectLink] = useState("/");
  // <Input
  //   text="Название предмета"
  //   type="text"
  //   value={subjectName}
  //   setValue={setSubjectName}
  // />;
  // <Input
  //   text="Ссылка на предмет (с '/')"
  //   type="link"
  //   value={subjectLink}
  //   setValue={setSubjectLink}
  // />;
  // <Button text="добавить" onClick={handleLogin} />;
  // disciplines.push({ name: subjectName, linkName: subjectLink });
};
