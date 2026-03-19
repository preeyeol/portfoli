const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Personal MERN portfolio with contact form, resume upload/download, and clean backend architecture.',
  },
  {
    title: 'E-commerce Platform',
    description:
      'A full stack app with authentication, product listings, and scalable API structure.',
  },
  {
    title: 'Task Management App',
    description:
      'A productivity app with CRUD features, responsive UI, and reusable React components.',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Selected work</h2>

        <div className="grid cards-grid">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-tag">MERN + Clean Code</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
