import "./Nav.css";

interface NavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Nav({ isMenuOpen, setIsMenuOpen }: NavProps) {
  return (
    <nav className="global-navbar">
      <span>HOST://DEV.RAFAEL</span>

      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
      </button>
    </nav>
  );
}
