import React from "react";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Footer from "../../components/footer/Footer";

const GradesPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="page">
        <Sidepanel ourPage="grades" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GradesPage;
