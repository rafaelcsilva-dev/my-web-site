import "./NodeTopic.css";

interface NodeTopicProps {
  title: string;
  documents: any[];
}

export default function NodeTopic({ title, documents }: NodeTopicProps) {
  return (
    <details className="node-topic">
      <summary>{title}</summary>

      {documents}
    </details>
  );
}
