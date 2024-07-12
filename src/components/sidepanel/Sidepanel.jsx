import React from "react";
// import { Link } from "react-router-dom";
import "./Sidepanel.css";
import Item from "../item/Item";

const Sidepanel = () => {
  const disciplines = [
    { name: "Алгебра", linkName: "/algebra" },
    { name: "Матан", linkName: "/matan" },
    { name: "C#", linkName: "/csharp" },
  ];

  // Добавление нового предмета
  // disciplines.forEach((discipline) => {
  //   const listItem = document.createElement("li");
  //   listItem.textContent = discipline.name;
  //   sidebar.appendChild(listItem);
  // });

  return (
    <div className="sidepanel">
      <ul>
        {disciplines.map((discipline, index) => (
          <li key={index}>
            <Item name={discipline.name} linkName={discipline.linkName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidepanel;
