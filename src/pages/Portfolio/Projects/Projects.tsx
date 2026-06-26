import "./Projects.css";

import Header from "../../../components/Header/Header";
import NodeInteractive from "../../../components/NodeInteractive/NodeInteractive";

export default function Project() {
  return (
    <section className="projects-page">
      <Header
        log="NET_STATUS: SECURE // REPO_V2.0 // PALETTE: MAGENTA_CYAN"
        title="PROJECTS"
        subtitle=""
      />

      <section className="projects-container">
        <NodeInteractive
          link="SEU_LINK_AQUI"
          meta="MODULE // TTRPG_ENGINE_CORE"
          title="Umbra RPG System"
          text="Plataforma operacional desenvolvida para otimizar o gerenciamento, processamento de dados e manutenção de fichas de personagens em sistemas de RPG de mesa. Foco em automação de atributos e integridade de registros em tempo real."
        />

        <NodeInteractive
          link="SEU_LINK_AQUI"
          meta="MODULE // LOGIC_PLAYGROUND"
          title="GameHub"
          text="Ambiente centralizado de aplicações interativas e simulações lógicas. Projetado para integrar mecânicas de entretenimento computacional com algoritmos de aprendizado estruturado focado no desenvolvimento de software."
        />

        <NodeInteractive
          link="SEU_LINK_AQUI"
          meta="NET_NODE // REALTIME_WEBSOCKET"
          title="Chat Online"
          text="Protocolo de comunicação instantânea baseado em WebSockets. Implementação de transmissão assíncrona de pacotes de texto em tempo real, permitindo conexões simultâneas de múltiplos agentes e isolamento seguro de salas."
        />

        <NodeInteractive
          link="SEU_LINK_AQUI"
          meta="NET_NODE // EXTERNAL_API_QUERY"
          title="Search Movie"
          text="Módulo de busca e indexação de dados cinematográficos construído sobre o ecossistema Next.js e TypeScript. Consumo estruturado de APIs externas com tratamento de dados, paginação inteligente e renderização reativa."
        />

        <NodeInteractive
          link="SEU_LINK_AQUI"
          meta="SYS_MODULE // MINIMAL_TEXT_RENDER"
          title="Antológica"
          text="Interface de leitura especializada com foco em eliminação de ruído cognitivo. Arquitetura voltada para a exibição limpa de fluxos textuais, otimização de legibilidade e renderização de layouts com distração zero."
        />

        <NodeInteractive
          link="SEU_LINK_AQUI"
          meta="SYS_MODULE // PRODUCTIVITY_SCHEDULER"
          title="Ordena"
          text="Aplicação de gerenciamento e otimização de rotinas de trabalho. Estruturação modular de tarefas lógicas, repositório de anotações persistentes e controle de prazos projetado para sincronização e planejamento de atividades."
        />
      </section>
    </section>
  );
}
