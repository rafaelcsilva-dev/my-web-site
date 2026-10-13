import "./Home.css";
import Header from "../../../components/Header/Header";
import NodeStatic from "../../../components/NodeStatic/NodeStatic";
import NodeInteractive from "../../../components/NodeInteractive/NodeInteractive";

export default function Home() {
  return (
    <section className="home-page">
      <Header
        log="NET_STATUS: SECURE // REPO_V2.0"
        title="HOME // MAIN_TERMINAL"
        subtitle="Desenvolvedor focado na construção de sistemas eficientes e arquiteturas de software limpas. Atuo na intersecção entre lógica computacional pura e desenvolvimento de interfaces reativas, documentando processos, protocolos de rede e implementações de infraestrutura em tempo real."
      />

      <span className="divider">
        01 // INFORMAÇÕES TÉCNICAS DA STACK (READ_ONLY)
      </span>

      <div className="stack-container">
        <NodeStatic
          meta="01 // INTERFACE"
          title="FRONTEND"
          items={["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"]}
        />

        <NodeStatic
          meta="02 // SERVIDOR"
          title="BACKEND"
          items={["Node.js", "Express", "Supabase", "Python"]}
        />

        <NodeStatic
          meta="03 // AMBIENTE"
          title="INFRA & DEVOPS"
          items={["Git", "GitHub", "Vercel", "Render"]}
        />

        <NodeStatic
          meta="04 // METODOLOGIA"
          title="PARADIGMAS E CONCEITOS"
          items={[
            "Código Limpo",
            "Componentização",
            "Prototipagem",
            "POO",
            "Design System",
          ]}
        />
      </div>

      <span className="divider">
        02 // CENTRAL_DE_DADOS_DINÂMICA (EXECUTE_LINK)
      </span>

      <div className="production-container">
        <NodeInteractive
          type="navigate"
          link="./articles"
          meta="PARTITION_01 // PUBLIC"
          title="ARTIGOS"
          text="Textos estruturados detalhando a engenharia por trás de problemas
            complexos, análises críticas de performance de software e guias
            técnicos de arquitetura."
        />

        <NodeInteractive
          type="navigate"
          link="./studies"
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
