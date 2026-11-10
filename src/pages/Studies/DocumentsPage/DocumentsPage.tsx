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
      <button onClick={() => navigate(`/studies/${subject}`)}>
        [&lt;&lt; voltar]
      </button>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{document}</ReactMarkdown>

      <div>
        <button onClick={() => navigate(`/studies/${subject}`)}>
          [&lt;&lt; voltar]
        </button>

        <button onClick={() => navigate(`/studies/${subject}`)}>
          [próximo &gt;&gt;]
        </button>
      </div>
    </div>
  );
}
