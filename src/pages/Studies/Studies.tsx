import { useState } from "react";
import "./Studies.css";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";
import NodeClosedOff from "../../components/NodeClosedOff/NodeClosedOff";

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="stud-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NodeClosedOff moduleName="studies" />
      </section>
    </main>
  );
}
