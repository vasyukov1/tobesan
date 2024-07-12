import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a href="https://t.me/overmindv">Сверхразум говорит</a>
      </div>
      <Link>About us</Link>
      <div>
        <a href="https://t.me/vyshkochka">Вышкочка</a>
      </div>
      <div>
        <a href="https://t.me/Mister_V_1">Dima</a>
      </div>
      <div>
        <a href="https://t.me/amirovagil">Agile macho</a>
      </div>
    </div>
  );
};

export default Footer;
