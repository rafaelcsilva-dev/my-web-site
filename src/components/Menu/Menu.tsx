import { useNavigate, useLocation } from "react-router-dom";
import { useAppTheme } from "../../context/ThemeContext";
import "./Menu.css";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  // Consome tudo direto do contexto global unificado
  const { activeTheme, changePalette } = useAppTheme();

  return (
    <aside className="menu">
      <header>
        <span>// MENU_ORCHESTRATOR</span>
      </header>

      <section>
        <button
          className={
            location.pathname === "/" || location.pathname === "/home"
              ? "nav-active"
              : ""
          }
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
          className={
            location.pathname === "/about" || location.pathname === "/sobre"
              ? "nav-active"
              : ""
          }
          onClick={() => navigate("/about")}
        >
          [ ABOUT ]
        </button>

        <hr />

        <button
          className={
            location.pathname === "/articles" ||
            location.pathname === "/artigos"
              ? "nav-active"
              : ""
          }
          onClick={() => navigate("/articles")}
        >
          [ ARTICLES ]
        </button>
        <button
          className={
            location.pathname === "/studies" || location.pathname === "/estudos"
              ? "nav-active"
              : ""
          }
          onClick={() => navigate("/studies")}
        >
          [ STUDIES ]
        </button>
      </section>

      <footer>
        <span>PALLETE</span>

        <div className="palette-container">
          {["cyber", "matrix", "amber", "space", "steel", "virus"].map(
            (theme) => (
              <button
                key={theme}
                className={activeTheme === theme ? "btn-active" : ""}
                onClick={() => changePalette(theme)}
              >
                {theme.toUpperCase()}
              </button>
            ),
          )}
        </div>
      </footer>
    </aside>
  );
}
