import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import Main from "../../components/main/Main";

const Home = () => {
  return (
    <div>
      <Header />
      <Sidepanel />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
