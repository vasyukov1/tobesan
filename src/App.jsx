import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routing/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
