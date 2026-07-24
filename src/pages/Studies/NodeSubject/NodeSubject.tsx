import "./NodeSubject.css";

interface NodeSubjectProps {
  title: string;
  id: string;
  date: string;
  onClick: () => void;
}

export default function NodeSubject({
  title,
  id,
  date,
  onClick,
}: NodeSubjectProps) {
  return (
    <div className="node-subject" onClick={onClick}>
      <h3>{title}</h3>

      <div>
        <span>ID: {id}</span>
        <span>LAST UPDATE: {date}</span>
      </div>
    </div>
  );
}
