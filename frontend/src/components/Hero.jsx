function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">MERN Stack Portfolio</p>
          <h1>Hi, I am Preeti Raskoti</h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-text">
            I build scalable and clean web applications using MongoDB, Express,
            React, and Node.js with a strong focus on maintainable architecture.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <span className="status-badge">Available for work</span>
            <h3>Clean Code Focus</h3>
            <p>
              Separation of concerns, reusable components, and scalable backend
              structure.
            </p>
            <ul>
              <li>Responsive frontend</li>
              <li>REST API integration</li>
              <li>Resume upload/download feature</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
