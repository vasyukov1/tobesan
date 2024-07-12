import React from "react";
import Item from "../item/Item";
import { Link } from "react-router-dom";
import "./Sidepanel.css";

const Sidepanel = () => {
  return (
    <div className="sidepanel">
      <div className="sidepanel__title">
        <h1>Конспекты</h1>
      </div>
      <div className="block algebra">
        <Link to="/algebra">
          <Item text="Алгебра" />
        </Link>
      </div>
      <div className="block matan">
        <Link to="/matan">
          <Item text="Матан" />
        </Link>
      </div>
      <div className="block discra">
        <Link to="/discra">
          <Item text="Дискра" />
        </Link>
      </div>
      <div className="block c">
        <Link to="/c">
          <Item text="C" />
        </Link>
      </div>
      <div className="block csharp">
        <Link to="/csharp">
          <Item text="C#" />
        </Link>
      </div>
      <div className="block cplusplus">
        <Link to="/cplusplus">
          <Item text="C++" />
        </Link>
      </div>
    </div>
  );
};

export default Sidepanel;
