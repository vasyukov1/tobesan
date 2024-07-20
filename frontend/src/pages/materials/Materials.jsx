import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";

const Materials = () => {
  return (
    <div>
      <Header />
      <div className="page">
        <Sidepanel ourPage="materials" />
      </div>
      <Footer />
    </div>
  );
};

export default Materials;
