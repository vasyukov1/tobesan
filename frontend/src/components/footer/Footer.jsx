import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { ABOUT_ROUTE } from "../../routing/const";

const Footer = () => {
  return (
    <div>
      <Link className="footer2" to={ABOUT_ROUTE}>
        About us
      </Link>
      <div className="footer">
        <a className="linkStyle" href="https://t.me/overmindv">
          Alex Sverhrazum
        </a>
        <a className="linkStyle" href="https://t.me/vyshkochka">
          Leo Vyshkochka
        </a>
        <a className="linkStyle" href="https://t.me/Mister_V_1">
          Dima Dezign
        </a>
        <a className="linkStyle" href="https://t.me/amirovagil">
          Agile Macho
        </a>
      </div>
    </div>
  );
};

export default Footer;
