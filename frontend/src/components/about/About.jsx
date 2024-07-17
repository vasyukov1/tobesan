import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";

const About = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default About;
