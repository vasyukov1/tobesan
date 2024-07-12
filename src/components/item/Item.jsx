import React from "react";
import "./Item.css";

const Item = ({ text }) => {
  return (
    <div className="item">
      <p>{text}</p>
    </div>
  );
};

export default Item;
