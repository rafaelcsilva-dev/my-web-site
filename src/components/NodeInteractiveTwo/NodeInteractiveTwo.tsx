import "./NodeInteractiveTwo.css";

interface NodeInteractiveTwoProps {
  link: string;
  number: string;
  size: string;
  title: string;
  subtitle: string;
}

export default function NodeInteractiveTwo({
  link,
  number,
  size,
  title,
  subtitle,
}: NodeInteractiveTwoProps) {
  return (
    <a href={link} className="node-interactive-two">
      <header>
        <span>{number}.md</span>
        <span>SIZE: {size}</span>
      </header>

      <section>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span>[ CLICK_TO_READ ] &gt;&gt;</span>
        </div>
      </section>
    </a>
  );
}
