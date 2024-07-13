import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import MainHW from "./main-hw/MainHW";
import "./Homework.css";

const Homework = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel />
        <MainHW />
      </div>
      <Footer />
    </div>
  );
};

export default Homework;
