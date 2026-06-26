import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface ThemeContextType {
  activeTheme: string;
  changePalette: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<string>("cyber");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "cyber";
    if (savedTheme !== "cyber") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    setActiveTheme(savedTheme);
  }, []);

  const changePalette = (theme: string) => {
    if (theme === "cyber") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("app-theme", theme);
    setActiveTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, changePalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}
