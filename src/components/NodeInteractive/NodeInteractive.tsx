import { useNavigate } from "react-router-dom";
import "./NodeInteractive.css";

interface NodeInteractiveProps {
  link: string;
  meta: string;
  title: string;
  text: string;
}

export default function NodeInteractive({
  link,
  meta,
  title,
  text,
}: NodeInteractiveProps) {
  const navigate = useNavigate();

  return (
    <a
      onClick={(e) => {
        e.preventDefault(); 
        navigate(link); 
      }}
      href="#"
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
