import Account from "../pages/account/Account.jsx";
import Grades from "../pages/grades/Grades.jsx";
import Home from "../pages/home/Home.jsx";
import Homework from "../pages/homework/Homework.jsx";
import {
  ACCOUNT_ROUTE,
  GRADES_ROUTE,
  HOMEWORK_ROUTE,
  MAIN_ROUTE,
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
    path: HOMEWORK_ROUTE,
    Element: <Homework />,
  },
  {
    path: GRADES_ROUTE,
    Element: <Grades />,
  },
];
