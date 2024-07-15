// import { BrowserRouter } from "react-router-dom";

// import AppRouter from "./routing/AppRouter";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <AppRouter />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// // src/App.jsx
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Materials from './pages/materials/Materials'; // Обновленный путь
// // import Algebra from './components/subjects/algebra/Algebra';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/materials" element={<Materials />} />
// //         <Route path="/materials/algebra" element={<Algebra />} />
// //         {/* Добавляем маршруты для других предметов */}
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing/AppRouter';
import { AuthProvider } from './components/context/AuthContext'; // Исправлен путь и имя

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
