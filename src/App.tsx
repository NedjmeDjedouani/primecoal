import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BecomeDistrubutorPage from "./BecomeDistrubutorPage";
import News from "./News";
import About from "./About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" /> {/* 👈 Renders at /app/ */}
        <Route Component={BecomeDistrubutorPage} path="/becomedis"/>
        <Route Component={News} path="/news"></Route>
        <Route Component={About} path="/About"></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;

