import "./ErrorPage.css";

interface ErrorPageProps {
  onClick: () => void;
}

export default function ErrorPage({ onClick }: ErrorPageProps) {
  return (
    <div className="error-page">
      <h2>Documento não encontrado</h2>
      <p>O artigo que você procurava não existe ou foi movido.</p>
      <button onClick={onClick}>
        &#60;&#60; Voltar 
      </button>
    </div>
  );
}
