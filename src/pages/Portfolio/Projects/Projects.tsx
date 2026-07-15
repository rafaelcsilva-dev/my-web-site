import "./Projects.css";
import { projects } from "../../../data/projects.ts";

import Header from "../../../components/Header/Header";
import NodeInteractive from "../../../components/NodeInteractive/NodeInteractive";

export default function Project() {
  return (
    <section className="projects-page">
      <Header
        log="NET_STATUS: SECURE // REPO_V2.0 "
        title="PROJECTS // DEPLOYED_MODULES"
        subtitle="Catálogo de aplicações em produção e sistemas isolados. Aqui estão documentadas as soluções de backend, microsserviços e interfaces modulares construídas para suportar cargas críticas, otimização de consultas e alta performance de processamento."
      />

      <section className="projects-container">
        {projects.map((e, i) => (
          <NodeInteractive
            key={i}
            type="link"
            link={e.link}
            meta={e.meta}
            title={e.title}
            text={e.text}
          />
        ))}
      </section>
    </section>
  );
}
