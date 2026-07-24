import { useNavigate } from "react-router-dom";

import "./TopicPage.css";

import NodeTopic from "../NodeTopic/NodeTopic";

interface DocumentItem {
  name: string;
  date: string;
}

interface TopicPageProps {
  topics: any[];
  onDocumentClick: (docName: string) => void;
}

export default function TopicPage({ topics, onDocumentClick }: TopicPageProps) {
  const navigate = useNavigate();

  return (
    <div className="topics-page">
      <button onClick={() => navigate(`/studies`)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path
            fill="currentColor"
            d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"
          />
        </svg>
      </button>

      {topics.map((t, i) => (
        <NodeTopic
          key={i}
          title={t.title}
          documents={t.documents.map((d: DocumentItem, idx: number) => (
            <div key={idx} onClick={() => onDocumentClick(d.name)}>
              <span>{d.name}.md</span> <span>{d.date}</span>
            </div>
          ))}
        />
      ))}
    </div>
  );
}
