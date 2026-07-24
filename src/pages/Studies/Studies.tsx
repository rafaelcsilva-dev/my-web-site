import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Studies.css";
import { studies } from "../../data/studies.ts";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";

import ErrorPage from "./ErrorPage/ErrorPage.tsx";
import SubjectPage from "./SubjectPage/SubjectPage.tsx";
import TopicPage from "./TopicsPage/TopicPage.tsx";
import DocumentsPage from "./DocumentsPage/DocumentsPage.tsx";

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { subjectId, documentId } = useParams();
  const navigate = useNavigate();

  const currentSubject = studies.find((s) => s.path === subjectId);

  const [markdownContent, setMarkdownContent] = useState<string>("");

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (subjectId && documentId) {
      setError(false);
      setMarkdownContent("");

      fetch(`/subjects/${subjectId}/${documentId}.md`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Arquivo não encontrado");
          }
          return res.text();
        })
        .then((text) => {
          if (text.trim().toLowerCase().startsWith("<!doctype html>")) {
            throw new Error("Documento não encontrado");
          }
          setMarkdownContent(text);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [subjectId, documentId]);

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="studies-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {subjectId && documentId ? (
          error ? (
            <ErrorPage onClick={() => navigate(`/studies/${subjectId}`)} />
          ) : (
            <>
              <DocumentsPage document={markdownContent} subject={subjectId} />
            </>
          )
        ) : subjectId && currentSubject ? (
          <TopicPage
            topics={currentSubject.topics}
            onDocumentClick={(d) => navigate(`/studies/${subjectId}/${d}`)}
          />
        ) : (
          <SubjectPage subjects={studies} />
        )}
      </section>
    </main>
  );
}
