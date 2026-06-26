import React from "react";
import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(<App />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </React.StrictMode>,
);
