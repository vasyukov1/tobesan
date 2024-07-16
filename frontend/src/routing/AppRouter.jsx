import React from "react";

import { Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import SubjectPage from "../pages/subjectPage/SubjectPage";
import { subjects } from "../components/subjects/Subjects";
import HomeworkPage from "../pages/homeworkPage/HomeworkPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/subjects/:subjectName"
        element={<SubjectPage subjectInfo={subjects} />}
      />
      <Route
        path="/subjects/:subjectName/homework"
        element={<HomeworkPage subjects={subjects} />}
      />
      {publicRoutes.map(({ path, Element }) => {
        return <Route key={path} path={path} element={Element} />;
      })}
    </Routes>
  );
};

export default AppRouter;
