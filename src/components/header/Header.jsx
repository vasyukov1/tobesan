import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Item from "../item/Item";
import { useSelector } from "react-redux";

const Header = () => {
  const isUserAuthenticated = useSelector((state) => state.user.isAuth);

  return (
    <div className="header">
      <Item name="Main" linkName="/" />
      <Item name="Materials" linkName="/materials" />
      <Item name="Homework" linkName="/homework" />
      <Item name="Grades" linkName="/grades" />

      {isUserAuthenticated ? (
        <Item name="Account" linkName="/account" />
      ) : (
        <Item name="Login" linkName="/login" />
      )}
    </div>
  );
};

export default Header;
