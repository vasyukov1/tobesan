import React, { useState } from "react";
import "./Sidepanel.css";
import Item from "../item/Item";
import Button from "../../pages/login/button/Button";

import "../subjects/Subjects";
import { disciplines, AddSubject } from "../subjects/Subjects";

const Sidepanel = () => {
  return (
    <div className="sidepanel">
      <div>
        <Button text="Добавить предмет" onClick={AddSubject} />
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
