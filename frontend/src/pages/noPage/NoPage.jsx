import React from "react";
import "./NoPage.css";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";

const NoPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="page">
        <Sidepanel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NoPage;
