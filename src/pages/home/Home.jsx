import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import SidebarComponent from "../sidebarComponent/SidebarComponent";

const Home = () => {
  return (
    <div>
      <SidebarComponent />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
