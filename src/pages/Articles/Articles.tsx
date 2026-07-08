import { useState } from "react";

import "./Articles.css";
//import { articles } from "../../data/articles.ts";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";
import NodeClosedOff from "../../components/NodeClosedOff/NodeClosedOff.tsx";
//import NodeInteractiveTwo from "../../components/NodeInteractiveTwo/NodeInteractiveTwo.tsx";

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="articles-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <NodeClosedOff moduleName="articles" />

        {/*
        {articles.map((e, i) => (
          <NodeInteractiveTwo
            key={i}
            link={e.link}
            number={(i + 1).toString().padStart(2, "0")}
            size={e.size}
            title={e.title}
            subtitle={e.subtitle}
          />
        ))}
        */}
      </section>
    </main>
  );
}
