import "./NodeStatic.css";

interface NodeStaticProps {
  meta: string;
  title: string;
  text: string;
}

export default function NodeStatic({ meta, title, text }: NodeStaticProps) {
  return (
    <div className="node-static">
      <span>{meta}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
