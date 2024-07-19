import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "./routes";
import SubjectPage from "../pages/subjectPage/SubjectPage";
import { subjects } from "../components/subjects/Subjects";
import HomeworkPage from "../pages/homeworkPage/HomeworkPage";
import MaterialsPage from "../pages/materialsPage/MaterialsPage";
// import MaterialsPageWithErrorBoundary from "../pages/materialsPage/MaterialsPageWithErrorBoundary";
import GradesPage from "../pages/gradesPage/GradesPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/subjects/:subjectName"
        element={<SubjectPage subjectInfo={subjects} />}
      />
      <Route
        path="/homework/:subjectName"
        element={<HomeworkPage subjects={subjects} />}
      />
      <Route
        path="/materials/:subjectName"
        element={<MaterialsPage subjects={subjects} />}
      />
      <Route
        path="/grades/:subjectName"
        element={<GradesPage subjects={subjects} />}
      />
      {publicRoutes.map(({ path, Element }) => {
        return <Route key={path} path={path} element={Element} />;
      })}
      <Route path="*" element={<Navigate to="/notFound" />} />
    </Routes>
  );
};

export default AppRouter;
