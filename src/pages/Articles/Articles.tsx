import { useState } from "react";
import "./Articles.css";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";
import NodeClosedOff from "../../components/NodeClosedOff/NodeClosedOff";

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="articles-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NodeClosedOff moduleName="articles" />
      </section>
    </main>
  );
}
