import Account from "../pages/account/Account.jsx";
import Grades from "../pages/grades/Grades.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Materials from "../pages/materials/Materials.jsx";
import About from "../pages/about/About.jsx";
import Homework from "../pages/homework/Homework.jsx";
import NoPage from "../pages/noPage/NoPage.jsx";
import {
  ACCOUNT_ROUTE,
  GRADES_ROUTE,
  HOMEWORK_ROUTE,
  MAIN_ROUTE,
  MATERIALS_ROUTE,
  LOGIN_ROUTE,
  ABOUT_ROUTE,
  NO_PAGE_ROUTE,
  REGISTER_ROUTE,
} from "./const.js";
import Register from "../pages/register/Register.jsx";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: <Home />,
  },
  {
    path: ACCOUNT_ROUTE,
    Element: <Account />,
  },
  {
    path: LOGIN_ROUTE,
    Element: <Login />,
  },
  {
    path: HOMEWORK_ROUTE,
    Element: <Homework />,
  },
  {
    path: GRADES_ROUTE,
    Element: <Grades />,
  },
  {
    path: MATERIALS_ROUTE,
    Element: <Materials />,
  },
  {
    path: NO_PAGE_ROUTE,
    Element: <NoPage />,
  },
  {
    path: REGISTER_ROUTE,
    Element: <Register />,
  },
  {
    path: ABOUT_ROUTE,
    Element: <About />,
  },
];
