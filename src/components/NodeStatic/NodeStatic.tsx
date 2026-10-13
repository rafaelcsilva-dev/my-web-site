import "./NodeStatic.css";

interface NodeStaticProps {
  meta: string;
  title: string;
  text?: string;
  items?: string[];
}

export default function NodeStatic({
  meta,
  title,
  text,
  items,
}: NodeStaticProps) {
  return (
    <div className="node-static">
      <span>{meta}</span>
      <h2>{title}</h2>

      <p>
        {items ? items.map((item) => <span key={item}>{item}</span>) : text}
      </p>
    </div>
  );
}
