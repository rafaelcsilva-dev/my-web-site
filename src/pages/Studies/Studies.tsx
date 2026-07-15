import { useState } from "react";

import "./Studies.css";
import { studies } from "../../data/studies.ts";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import NodeSubject from "./NodeSubject/NodeSubject.tsx";
import NodeTopic from "./NodeTopic/NodeTopic.tsx";
//import NodeClosedOff from "../../components/NodeClosedOff/NodeClosedOff";

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudie, setIsStudie] = useState({ isOpen: true, index: 0 });

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="studies-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {isStudie.isOpen ? (
          <div className="subject-page">
            <SearchBar />

            <div>
              {studies.map((e, i) => (
                <NodeSubject
                  key={i}
                  title={e.title}
                  id={e.id}
                  date={e.date}
                  onClick={() => setIsStudie({ isOpen: false, index: i })}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="topic-page">
            <div>
              <button onClick={() => setIsStudie({ isOpen: true, index: 0 })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    fill="currentColor"
                    d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"
                  />
                </svg>
              </button>
            </div>

            {studies[isStudie.index]?.topics.map((e, i) => (
              <NodeTopic
                key={i}
                title={e.title}
                documents={e.documents.map((d) => (
                  <p>{d}.md</p>
                ))}
              />
            ))}
          </div>
        )}

        {/*  <NodeClosedOff moduleName="studies" />*/}
      </section>
    </main>
  );
}
