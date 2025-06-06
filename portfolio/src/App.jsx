import React from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Bio from './components/sections/Bio/Bio';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-black text-white font-sans transition-colors duration-300 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto">
        <section id="bio" className="py-12 px-6 sm:px-8 md:px-10">
          <Bio />
        </section>

        <section id="skills" className="py-12 px-6 sm:px-8 md:px-10">
          <Skills />
        </section>

        <section id="projects" className="py-12 px-6 sm:px-8 md:px-10">
          <Projects />
        </section>

        <section id="experience" className="py-12 px-6 sm:px-8 md:px-10">
          <Experience />
        </section>

        <section id="education" className="py-12 px-6 sm:px-8 md:px-10">
          <Education />
        </section>
      </main>


      <Footer />
    </div>
  );
}

export default App;
