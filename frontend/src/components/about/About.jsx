import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Sidepanel from "../sidepanel/Sidepanel";
import AboutUs from "./aboutUs/AboutUs";

const About = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;
