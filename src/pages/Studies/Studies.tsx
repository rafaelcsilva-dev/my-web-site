import { useState } from "react";

import "./Studies.css";
import { studies } from "../../data/studies.ts";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";
import NodeStudie from "../../components/NodeStudie/NodeStudie";
//import NodeClosedOff from "../../components/NodeClosedOff/NodeClosedOff";

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudie, setIsStudie] = useState({ isOpen: true, index: 0 });

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="studies-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <label>
          <input type="text" placeholder="Buscar..." />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="currentColor"
                d="M544 513L397.2 364.2C417.2 336.3 429.1 302 429.1 265C429.1 171.9 354.4 96.1 262.6 96.1C170.7 96 96 171.8 96 264.9C96 358 170.7 433.8 262.5 433.8C302.3 433.8 338.8 419.6 367.5 395.9L513.5 544L544 513zM262.5 394.8C191.9 394.8 134.4 336.5 134.4 264.9C134.4 193.3 191.9 135 262.5 135C333.1 135 390.6 193.3 390.6 264.9C390.6 336.5 333.2 394.8 262.5 394.8z"
              />
            </svg>
          </button>
        </label>

        {isStudie.isOpen ? (
          <div>
            {studies.map((e, i) => (
              <NodeStudie
                key={i}
                meta={e.meta}
                title={e.title}
                id={e.id}
                date={e.date}
                onClick={() => setIsStudie({ isOpen: true, index: i })}
              />
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {/*  <NodeClosedOff moduleName="studies" />*/}
      </section>
    </main>
  );
}
