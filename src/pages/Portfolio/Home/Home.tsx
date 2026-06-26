import "./Home.css";
import Header from "../../../components/Header/Header";
import NodeStatic from "../../../components/NodeStatic/NodeStatic";
import NodeInteractive from "../../../components/NodeInteractive/NodeInteractive";

export default function Home() {
  return (
    <section className="home-page">
      <Header
        log="NET_STATUS: SECURE // REPO_V2.0 // PALETTE: MAGENTA_CYAN"
        title="HOME // MAIN_TERMINAL"
        subtitle="Desenvolvedor focado na construção de sistemas eficientes e arquiteturas de software limpas. Atuo na intersecção entre lógica computacional pura e desenvolvimento de interfaces reativas, documentando processos, protocolos de rede e implementações de infraestrutura em tempo real."
      />

      <span className="divider">
        01 // INFORMAÇÕES TÉCNICAS DA STACK (READ_ONLY)
      </span>

      <div className="stack-container">
        <NodeStatic
          meta="SYS_MODULE // CLIENT_SIDE_ENGINE"
          title="Engenharia de Interface"
          text="Desenvolvimento de aplicações SPA de alta performance utilizando ecossistemas modernos de renderização. Foco centralizado em semântica estrutural, arquitetura reativa de componentes, gerenciamento rigoroso de estados e design responsivo adaptável."
        />

        <NodeStatic
          meta="SYS_MODULE // SERVER_SIDE_ENGINE"
          title="Arquitetura de Serviços"
          text="Construção, otimização e manutenção de servidores lógicos e ecossistemas de APIs robustas. Implementação de rotas assíncronas seguras, orquestração de bancos de dados relacionais e manipulação estruturada de requisições de rede."
        />

        <NodeStatic
          meta="CORE_SYS // REPOSITORY_CONTROL"
          title="Controle de Código"
          text="Gerenciamento do ciclo de vida do software por meio de sistemas distribuídos. Manutenção e integridade de bases de código complexas através de ramificações lógicas estratégicas, fluxos de integração e documentação detalhada de revisões."
        />

        <NodeStatic
          meta="CORE_SYS // USER_INTERFACE_PROTO"
          title="Identidade e Prototipagem"
          text="Idealização, conceituação e validação de layouts sistêmicos. Mapeamento matemático de escalas tipográficas, fluxos de experiência do usuário (UX) e design visual estruturado."
        />
      </div>

      <span className="divider">
        02 // CENTRAL_DE_DADOS_DINÂMICA (EXECUTE_LINK)
      </span>

      <div className="production-container">
        <NodeInteractive
          link="#"
          meta="PARTITION_01 // PUBLIC"
          title="ARTIGOS"
          text="Textos estruturados detalhando a engenharia por trás de problemas
            complexos, análises críticas de performance de software e guias
            técnicos de arquitetura."
        />

        <NodeInteractive
          link="#"
          meta="PARTITION_02 // RAW_KNOWLEDGE"
          title="ESTUDOS"
          text="Minha base de documentação bruta. Notas de estudo profundas de
            Redes, lógica computacional discreta, matrizes e revisões detalhadas
            do ecossistema de engenharia."
        />
      </div>
    </section>
  );
}
