import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";

import "./App.css";
import "./styles/d1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
