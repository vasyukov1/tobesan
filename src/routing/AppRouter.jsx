// import { Routes, Route } from "react-router-dom";

// import { publicRoutes } from "./routes";

// const AppRouter = () => {
//   return (
//     <Routes>
       
//       {publicRoutes.map(({ path, Element }) => {
//         return <Route key={path} path={path} element={Element} />;
//       })}
//     </Routes>
//   );
// };

//export default AppRouter;

import { Routes, Route } from "react-router-dom";
import SidebarComponent from '../pages/sidebarComponent/SidebarComponent';
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <>
      <SidebarComponent />
      <Routes>
        {publicRoutes.map(({ path, Element }) => {
          return <Route key={path} path={path} element={<Element />} />;
        })}
      </Routes>
    </>
  );
};

export default AppRouter;

