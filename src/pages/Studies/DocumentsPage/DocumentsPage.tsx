import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import "./DocumentsPage.css";

interface DocumentsPageProps {
  document: string;
  subject: string;
}

export default function DocumentsPage({
  document,
  subject,
}: DocumentsPageProps) {
  const navigate = useNavigate();

  return (
    <div className="documents-page">
      <button onClick={() => navigate(`/studies/${subject}`)}>
        [&#60;&#60; voltar]
      </button>

      <ReactMarkdown>{document}</ReactMarkdown>

      <button onClick={() => navigate(`/studies/${subject}`)}>
        [&#60;&#60; voltar]
      </button>
    </div>
  );
}
