import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTheme, setActiveTheme] = useState<string>("cyber");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "cyber";
    setActiveTheme(currentTheme);
  }, []);

  const changePallete = (theme: string) => {
    if (theme === "cyber") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    setActiveTheme(theme);
  };

  return (
    <aside className="menu">
      <header>
        <span>// MENU_ORCHESTRATOR</span>
      </header>

      <section>
        <button 
          className={location.pathname === "/" || location.pathname === "/home" ? "nav-active" : ""} 
          onClick={() => navigate("/")}
        >
          [ HOME ]
        </button>
        <button 
          className={location.pathname === "/projects" ? "nav-active" : ""} 
          onClick={() => navigate("/projects")}
        >
          [ PROJECTS ]
        </button>
        <button 
          className={location.pathname === "/about" || location.pathname === "/sobre" ? "nav-active" : ""} 
          onClick={() => navigate("/about")}
        >
          [ ABOUT ]
        </button>

        <hr />

        <button 
          className={location.pathname === "/articles" || location.pathname === "/artigos" ? "nav-active" : ""} 
          onClick={() => navigate("/articles")}
        >
          [ ARTICLES ]
        </button>
        <button 
          className={location.pathname === "/studies" || location.pathname === "/estudos" ? "nav-active" : ""} 
          onClick={() => navigate("/studies")}
        >
          [ STUDIES ]
        </button>
      </section>

      <footer>
        <span>PALLETE</span>

        <div className="palette-container">
          <button 
            className={activeTheme === "cyber" ? "btn-active" : ""} 
            onClick={() => changePallete("cyber")}
          >
            CYBER
          </button>

          <button 
            className={activeTheme === "matrix" ? "btn-active" : ""} 
            onClick={() => changePallete("matrix")}
          >
            MATRIX
          </button>

          <button 
            className={activeTheme === "amber" ? "btn-active" : ""} 
            onClick={() => changePallete("amber")}
          >
            AMBER
          </button>

          <button 
            className={activeTheme === "space" ? "btn-active" : ""} 
            onClick={() => changePallete("space")}
          >
            SPACE
          </button>

          <button 
            className={activeTheme === "steel" ? "btn-active" : ""} 
            onClick={() => changePallete("steel")}
          >
            STEEL
          </button>

          <button 
            className={activeTheme === "virus" ? "btn-active" : ""} 
            onClick={() => changePallete("virus")}
          >
            VÍRUS
          </button>
        </div>
      </footer>
    </aside>
  );
}