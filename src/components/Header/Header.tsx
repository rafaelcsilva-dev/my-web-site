import "./Header.css";

interface HeaderProps {
  log: string;
  title: string;
  subtitle: string;
}

export default function Header({ log, title, subtitle }: HeaderProps) {
  return (
    <header className="header-component">
      <span>{log}</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
