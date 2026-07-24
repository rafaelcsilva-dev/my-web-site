import { useState } from "react";

import "./Editor.css";

import Nav from "../../../components/Nav/Nav";
import Menu from "../../../components/Menu/Menu";

import NodeClosedOff from "../../../components/NodeClosedOff/NodeClosedOff";

export default function Editor() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <div className="editor">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <NodeClosedOff moduleName="editor" />
      </div>
    </main>
  );
}

/*
         <nav>
          <select>
            <option value="">[p]</option>
            <option value="">[h1]</option>
            <option value="">[h2]</option>
            <option value="">[h3]</option>
            <option value="">[h4]</option>
          </select>

          <hr />

          <select>
            <option value="">[B]</option>
            <option value="">[I]</option>
            <option value="">[S]</option>
          </select>

          <hr />

          <button>[LINK]</button>
          <button>[CODE]</button>
          <button>[BLOCK]</button>
          <button>[QUOTE]</button>
          <button>[LIST]</button>
          <button>[TASK]</button>

          <hr />

          <button>[DOWNLOAD]</button>
        </nav>

        <div contentEditable="true"></div>
        */
