import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import { LOGIN_ROUTE } from "../../routing/const";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate(LOGIN_ROUTE);
  };

  return (
    <div>
      <Header />
      <Main />
      <button onClick={handleLogout}>Log Out</button>
      <Footer />
    </div>
  );
};

export default Account;
