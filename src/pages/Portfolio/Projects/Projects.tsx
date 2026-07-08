import "./Projects.css";
import { projects } from "../../../data/projects.ts";

import Header from "../../../components/Header/Header";
import NodeInteractive from "../../../components/NodeInteractive/NodeInteractive";

export default function Project() {
  return (
    <section className="projects-page">
      <Header
        log="NET_STATUS: SECURE // REPO_V2.0 "
        title="PROJECTS"
        subtitle=""
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
