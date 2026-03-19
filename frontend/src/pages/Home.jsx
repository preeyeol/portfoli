import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ResumeSection from '../components/ResumeSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
