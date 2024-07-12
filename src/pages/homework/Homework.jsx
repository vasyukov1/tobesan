import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Main from "../../components/main/Main";
import "./Homework.css";

const Homework = () => {
  return (
    <div className="page">
      {/* <div className="header"> */}
      <Header />
      {/* </div> */}
      {/* <div className="sidepanel"> */}
      <Sidepanel />
      {/* </div> */}
      {/* <div className="main"> */}
      <Main />
      {/* </div>
      <div className="footer"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default Homework;
