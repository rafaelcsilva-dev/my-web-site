interface StudiesTopicProps {
  title: string;
}

export default function StudiesTopic({ title }: StudiesTopicProps) {
  return (
    <details>
      <summary>{title}</summary>
    </details>
  );
}
