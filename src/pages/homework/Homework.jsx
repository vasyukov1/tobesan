import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Main from "../../components/main/Main";
import "./Homework.css";

const Homework = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel/> 
        <Main/>
      </div>
      <Footer />
    </div>
  );
};

export default Homework;
