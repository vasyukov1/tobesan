import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";

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
