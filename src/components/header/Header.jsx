import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Item from "../item/Item";
import { useSelector } from "react-redux";

const Header = () => {
  const isUserAuthenticated = useSelector((state) => state.user.isAuth);

  return (
    <div className="header">
      <div>
        <Link to="/">
          <Item text="Main" />
        </Link>
      </div>
      <div>
        <Link to="/materials">
          <Item text="Materials" />
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
        {isUserAuthenticated ? (
          <Link to="/account">
            <Item text="Account" />
          </Link>
        ) : (
          <Link to="/login">
            <Item text="Login" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
