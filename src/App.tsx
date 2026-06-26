import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Importando suas páginas principais
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Home from "./pages/Portfolio/Home/Home";
import Projects from "./pages/Portfolio/Projects/Projects.tsx";
import About from "./pages/Portfolio/About/About.tsx";

import Articles from "./pages/Articles/Articles.tsx";

import Studies from "./pages/Studies/Studies.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="articles" element={<Articles />}></Route>

        <Route path="studies" element={<Studies />}></Route>

        {/* Fallback de segurança */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
