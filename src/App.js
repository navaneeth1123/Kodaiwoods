import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Home />} />
        <Route path="/des" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contectus" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
