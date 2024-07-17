import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Link className="footer2">About us</Link>
      <div className="footer">
        <a href="https://t.me/overmindv">Alex Sverhrazum</a>
        <a href="https://t.me/vyshkochka">Leo Vyshkochka</a>
        <a href="https://t.me/Mister_V_1">Dima Dezign</a>
        <a href="https://t.me/amirovagil">Agile Macho</a>
      </div>
    </div>
  );
};

export default Footer;
