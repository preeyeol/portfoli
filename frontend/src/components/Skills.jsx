const skills = [
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'JavaScript',
  'REST API',
  'Responsive Design',
  'Clean Architecture',
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Tech stack and strengths</h2>

        <div className="grid cards-grid">
          {skills.map((skill) => (
            <article key={skill} className="card skill-card">
              <h3>{skill}</h3>
              <p>Used to build scalable and maintainable applications.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
