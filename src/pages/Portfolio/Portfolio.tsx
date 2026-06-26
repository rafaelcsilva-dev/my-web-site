import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./Portfolio.css";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="portfolio-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Outlet />
      </section>
    </main>
  );
}
