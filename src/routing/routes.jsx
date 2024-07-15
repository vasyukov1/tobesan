import Account from "../pages/account/Account.jsx";
import Grades from "../pages/grades/Grades.jsx";
import Home from "../pages/home/Home.jsx";
import Homework from "../pages/homework/Homework.jsx";
import Login from "../pages/login/Login.jsx";
import Materials from "../pages/materials/Materials.jsx";
import Algebra from "../components/subjects/algebra/Algebra.jsx";
import {
  ACCOUNT_ROUTE,
  GRADES_ROUTE,
  HOMEWORK_ROUTE,
  MAIN_ROUTE,
  MATERIALS_ROUTE,
  LOGIN_ROUTE,
  ALGEBRA_ROUTE
} from "./const.js";

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
    path: ALGEBRA_ROUTE,
    Element: <Algebra />
  },
];
