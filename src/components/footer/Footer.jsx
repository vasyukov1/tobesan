import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about">About us</Link>
      <div>
        <a href="https://t.me/overmindv">Alex Sverhrazum</a>
      </div>
      <div>
        <a href="https://t.me/vyshkochka">Leo Vyshkochka</a>
      </div>
      <div>
        <a href="https://t.me/Mister_V_1">Dima Dezign</a>
      </div>
      <div>
        <a href="https://t.me/amirovagil">Agile Macho</a>
      </div>
    </div>
  );
};

export default Footer;
