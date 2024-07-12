import React from "react";
import "./Header.css";

import Item from "../item/Item";

const Header = () => {
  return (
    <div className="header">
      <Item name="Main" linkName="/" />
      <Item name="Materials" linkName="/materials" />
      <Item name="Homework" linkName="/homework" />
      <Item name="Grades" linkName="/grades" />

      {localStorage.getItem("authToken") ? (
        <Item name="Account" linkName="/account" />
      ) : (
        <Item name="Login" linkName="/login" />
      )}
    </div>
  );
};

export default Header;
