import { useAppTheme } from "../../context/ThemeContext";
import "./Header.css";

interface HeaderProps {
  log: string;
  title: string;
  subtitle: string;
}

export default function Header({ log, title, subtitle }: HeaderProps) {
  // Puxa o estado global da paleta ativa
  const { activeTheme } = useAppTheme();

  return (
    <header className="header-component">
      {/* Junta o seu log padrão com o nome do tema atualizado em UPPERCASE */}
      <span>
        {log} // PALETTE: {activeTheme.toUpperCase()}
      </span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
