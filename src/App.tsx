import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BecomeDistrubutorPage from "./BecomeDistrubutorPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" /> {/* 👈 Renders at /app/ */}
        <Route Component={BecomeDistrubutorPage} path="/becomedis"/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;

