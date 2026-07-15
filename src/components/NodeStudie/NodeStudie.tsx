import "./NodeStudie.css";

interface NodeStudieProps {
  meta: string;
  title: string;
  id: string;
  date: string;
  onClick: () => void;
}

export default function NodeStudie({
  meta,
  title,
  id,
  date,
  onClick,
}: NodeStudieProps) {
  return (
    <div className="node-studie" onClick={onClick}>
      <span>{meta}</span>
      <h3>{title}</h3>

      <div>
        <span>ID: {id}</span>
        <span>DATE: {date}</span>
      </div>
    </div>
  );
}
