import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Item from "./item/Item";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <Item text="Tobesan" />
        </Link>
      </div>
      <div>
        <Link to="/homework">
          <Item text="Homework" />
        </Link>
      </div>
      <div>
        <Link to="/grades">
          <Item text="Grades" />
        </Link>
      </div>
      <div>
        <Link to="/account">
          <Item text="Account" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
