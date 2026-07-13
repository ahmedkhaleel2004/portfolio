const positions = [
  {
    title: "Founder",
    company: "GitDiagram",
    date: "Jan. 2025 - Present",
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 300,000+ users, 15,000+ stars.",
  },
  {
    title: "MLH Production Engineering Fellow",
    company: "Meta",
    date: "Jun. 2024 - Sep. 2024",
    desc: "Built and deployed a scalable web application with automated CI/CD workflows, webhook alerts, and system monitoring, while optimizing performance and uptime for a Linux (CentOS) VPS",
  },
  {
    title: "Software Developer",
    company: "McMaster Engineering Society",
    date: "Jul. 2024 - Dec. 2024",
    desc: "Developing Clubs/Teams portal backend for over 61 clubs and 6500 students using TypeScript, Node.js, and MongoDB",
  },
  {
    title: "Software Engineering Research Assistant",
    company: "Healthcare Systems R&A Inc.",
    date: "Jun. 2024 - Sep. 2024",
    desc: "Enhanced prediction models and optimized real-time inference by fine-tuning feature extraction, linking sediment samples with KNN, and building an asynchronous frame processing pipeline",
  },
  {
    title: "Workshop Developer",
    company: "McMaster Artificial Intelligence Society",
    date: "Jan. 2024 - Apr. 2024",
    desc: "Developed and taught hands-on Machine Learning workshops for 100+ students, covering data preprocessing, CNNs using TensorFlow, and live coding on Google Colab",
  },
] as const;

function Experience() {
  return (
    <div>
      <main className="font-body p-8">
        <p>Explore my working background!</p>
        <hr className="border-body-light-grey my-4 border-t-2" />
        {positions.map((position) => (
          <div key={`${position.company}-${position.title}`}>
            <p className="font-bold">{position.title}</p>
            <p className="mb-2">
              <i>{position.company}</i>
            </p>
            <p className="mb-2">{position.desc}</p>
            <p>{position.date}</p>
            <hr className="border-body-light-grey my-4 border-t-2" />
          </div>
        ))}
      </main>
    </div>
  );
}

export default Experience;
