const GITHUB_USER = "rafaelcsilva-dev"; // Substitui pelo teu user do GitHub
const GITHUB_REPO = "my-studies"; // Substitui pelo nome do repo (ex: meus-estudos-md)

// 1. Busca toda a estrutura de pastas e arquivos do repositório de uma vez só
export async function fetchGitHubTree() {
  const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/git/trees/main?recursive=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao buscar árvore do GitHub");
    const data = await response.json();
    return data.tree; // Retorna array com todos os caminhos e arquivos
  } catch (error) {
    console.error(error);
    return [];
  }
}

// 2. Busca o conteúdo bruto de um arquivo .md específico quando o usuário abrir um documento
export async function fetchMarkdownFromGitHub(
  subject: string,
  topic: string,
  document: string,
) {
  const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/main/${subject}/${topic}/${document}.md`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Arquivo não encontrado no GitHub");
    return await response.text();
  } catch (error) {
    console.error(error);
    return null;
  }
}
