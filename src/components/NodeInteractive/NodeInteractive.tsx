import { useNavigate } from "react-router-dom";
import "./NodeInteractive.css";

interface NodeInteractiveProps {
  type: "navigate" | "link";
  link: string;
  meta: string;
  title: string;
  text: string;
}

export default function NodeInteractive({
  type,
  link,
  meta,
  title,
  text,
}: NodeInteractiveProps) {
  const navigate = useNavigate();

  // Conteúdo isolado do card
  const renderCardContent = () => (
    <>
      <span>{meta}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <div>
        <span>[ CLICK_TO_RUN ]</span>
        <span>&gt;&gt;</span>
      </div>
    </>
  );

  // Link externo
  if (type === "link") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="node-interactive"
      >
        {renderCardContent()}
      </a>
    );
  }

  // Navegação interna
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        navigate(link);
      }}
      className="node-interactive"
    >
      <span>{meta}</span>
      <h2>{title}</h2>
      <p>{text}</p>

      <div>
        <span>[ CLICK_TO_RUN ]</span>
        <span>&gt;&gt;</span>
      </div>
    </a>
  );
}
