import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Importando suas páginas principais
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Home from "./pages/Portfolio/Home/Home";
import Projects from "./pages/Portfolio/Projects/Projects.tsx";
import About from "./pages/Portfolio/About/About.tsx";

import Articles from "./pages/Articles/Articles.tsx";

import Studies from "./pages/Studies/Studies.tsx";

import Editor from "./pages/Studies/Editor/Editor.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rotas principais do portfólio*/}
        <Route path="/" element={<Portfolio />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>

        {/*Artigos*/}
        <Route path="articles" element={<Articles />}></Route>

        {/*Estudos*/}
        <Route path="studies" element={<Studies />}></Route>

        {/*Disciplinas*/}
        <Route path="studies/:subjectId" element={<Studies />}></Route>

        <Route path="studies/editor" element={<Editor />}></Route>

        {/*Documentos*/}
        <Route
          path="studies/:subjectId/:documentId"
          element={<Studies />}
        ></Route>

        {/* Fallback de segurança */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*





*/
