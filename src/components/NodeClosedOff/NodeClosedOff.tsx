import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./NodeClosedOff.css";

interface NodeClosedOffProps {
  moduleName?: string;
}

export default function NodeClosedOff({
  moduleName = "unknown_module",
}: NodeClosedOffProps) {
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("COMPILING_SOURCE");
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    let currentTimeoutId: number;

    const simulateTerminalLoading = () => {
      setCurrentProgress((prevProgress) => {
        const nextProgress = prevProgress + Math.floor(Math.random() * 15) + 5;

        if (nextProgress >= 88) {
          setStatusText("HOLD_COMPILING // INTERRUPTED");
          setIsFailed(true);
          return 88;
        }

        currentTimeoutId = window.setTimeout(
          simulateTerminalLoading,
          Math.random() * 500 + 150,
        );
        return nextProgress;
      });
    };

    currentTimeoutId = window.setTimeout(simulateTerminalLoading, 500);

    return () => {
      clearTimeout(currentTimeoutId);
    };
  }, []);

  const currentBytes = Math.floor((currentProgress / 100) * 1024);

  return (
    <div className="node-closed-off-container">
      <div>
        <span className="error-code">ERR // ACCESS_DENIED</span>
        <h1 className="construction-title">Módulo em Desenvolvimento</h1>
        <p className="construction-text">
          A partição do sistema{" "}
          <span className="highlight">[{moduleName.toUpperCase()}]</span> está
          passando por uma injeção de dados estruturados. O link com a interface
          gráfica principal ainda não foi estabelecido.
        </p>
      </div>

      {/* Box de Status do Hardware */}
      <div className="system-status-box">
        <div className="status-row">
          <span>STATUS:</span>
          <span className={`status-blink ${isFailed ? "failed" : ""}`}>
            {statusText}
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${currentProgress}%` }}
          ></div>
        </div>

        <div className="status-row bytes">
          <span>LOAD_BLOCK: {currentBytes}kb / 1024kb</span>
          <span>EST. TIME: IN_PROGRESS</span>
        </div>
      </div>

      {/* Interface Amigável de UX Injetada pós-falha */}
      {isFailed && (
        <div className="ux-rescue-area">
          <span className="user-alert">
            [ AVISO: ESTA PÁGINA AINDA NÃO FOI CRIADA NO SERVIDOR ]
          </span>
          <button onClick={() => navigate("/")} className="abort-btn">
            &gt; ABORT_MISSION_AND_RETURN_HOME
          </button>
        </div>
      )}
    </div>
  );
}
