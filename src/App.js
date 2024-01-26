import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import FichLogement from "./pages/Logement";
import NoPage from "./pages/Nopage";
import "./Appstyle.scss"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;