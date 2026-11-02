import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Studies.css";

import {
  fetchGitHubTree,
  fetchMarkdownFromGitHub,
} from "../../services/githubService";

import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";

import ErrorPage from "./ErrorPage/ErrorPage.tsx";
import SubjectPage from "./SubjectPage/SubjectPage.tsx";
import TopicPage from "./TopicsPage/TopicPage.tsx";
import DocumentsPage from "./DocumentsPage/DocumentsPage.tsx";

// Função para remover prefixos numéricos (ex: "01-frontend" -> "FRONTEND")
const cleanTitle = (str: string) => {
  return str
    .replace(/^\d+[-_]*/, "")
    .toUpperCase()
    .replace(/-/g, " ");
};

export default function Articles() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { subjectId, topicId, documentId } = useParams();
  const navigate = useNavigate();

  const [studies, setStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  // 1. Busca a árvore de arquivos do GitHub e monta a estrutura dinamicamente
  useEffect(() => {
    fetchGitHubTree().then((tree) => {
      const subjectsMap: { [key: string]: any } = {};

      if (!tree || !Array.isArray(tree)) {
        setLoading(false);
        return;
      }

      tree.forEach((item: any) => {
        const parts = item.path.split("/");

        // Esperado: materia / topico / arquivo.md
        if (parts.length === 3 && parts[2].endsWith(".md")) {
          const subjectPath = parts[0];
          const topicPath = parts[1];
          const fileName = parts[2];

          const docPath = fileName.replace(/\.md$/, "");
          const docTitle = cleanTitle(docPath);
          const subjectTitle = cleanTitle(subjectPath);
          const topicTitle = cleanTitle(topicPath);

          if (!subjectsMap[subjectPath]) {
            subjectsMap[subjectPath] = {
              path: subjectPath,
              title: subjectTitle,
              topics: [],
            };
          }

          let topicObj = subjectsMap[subjectPath].topics.find(
            (t: any) => t.path === topicPath,
          );
          if (!topicObj) {
            topicObj = {
              path: topicPath,
              title: topicTitle,
              documents: [],
            };
            subjectsMap[subjectPath].topics.push(topicObj);
          }

          topicObj.documents.push({
            path: docPath,
            title: docTitle,
          });
        }
      });

      setStudies(Object.values(subjectsMap));
      setLoading(false);
    });
  }, []);

  // 2. Busca o conteúdo Markdown do arquivo específico selecionado
  useEffect(() => {
    if (!subjectId || !topicId || !documentId) {
      return;
    }

    setError(false);
    setMarkdownContent("");

    fetchMarkdownFromGitHub(subjectId, topicId, documentId)
      .then((text) => {
        if (!text || text.trim().toLowerCase().startsWith("<!doctype html>")) {
          throw new Error("Documento não encontrado");
        }
        setMarkdownContent(text);
      })
      .catch(() => {
        setError(true);
      });
  }, [subjectId, topicId, documentId]);

  const currentSubject = studies.find((s) => s.path === subjectId);

  if (loading) {
    return (
      <main className="main-container">
        <div
          className="terminal-text"
          style={{ color: "red", padding: "2rem" }}
        >
          [ CARREGANDO DADOS DO REPOSITÓRIO... ]
        </div>
      </main>
    );
  }

  return (
    <main className="main-container">
      {isMenuOpen && <Menu />}

      <section className="studies-section">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {subjectId && documentId ? (
          error ? (
            <ErrorPage onClick={() => navigate(`/studies/${subjectId}`)} />
          ) : (
            <DocumentsPage document={markdownContent} subject={subjectId} />
          )
        ) : subjectId && currentSubject ? (
          <TopicPage
            topics={currentSubject.topics}
            onDocumentClick={(topicPath, documentPath) =>
              navigate(`/studies/${subjectId}/${topicPath}/${documentPath}`)
            }
          />
        ) : (
          <SubjectPage subjects={studies} />
        )}
      </section>
    </main>
  );
}
