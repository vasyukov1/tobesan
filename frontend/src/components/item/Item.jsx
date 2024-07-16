import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ name, linkName }) => {
  return (
    <div>
      <Link to={linkName}>
        <div className="item">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
