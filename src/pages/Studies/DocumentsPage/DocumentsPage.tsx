import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{document}</ReactMarkdown>

      <button onClick={() => navigate(`/studies/${subject}`)}>
        [&lt;&lt; voltar]
      </button>
    </div>
  );
}
