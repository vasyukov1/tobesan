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
          Alex
        </a>
        <a className="linkStyle" href="https://t.me/vyshkochka">
          Leo
        </a>
        <a className="linkStyle" href="https://t.me/Mister_V_1">
          Dima
        </a>
        <a className="linkStyle" href="https://t.me/amirovagil">
          Agil
        </a>
      </div>
    </div>
  );
};

export default Footer;
