import React, { useEffect, useRef } from "react";
import './BasePage.css';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import FloatingBar from '../../component/floatingBar/FloatingBar';

function BasePage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup the observer on component unmount
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="Base">
      <FloatingBar />
      <section
        className="section"
        ref={(el) => (sectionRefs.current[0] = el)}
        id="home"
      >
        <Home />
      </section>
      <hr />
      <section
        className="section"
        ref={(el) => (sectionRefs.current[1] = el)}
        id="projects"
      >
        
       <Projects />
      </section>
      <hr />
      <section
        className="section"
        ref={(el) => (sectionRefs.current[2] = el)}
        id="experience"
      >
        <Experience />
      </section>
      <hr />

      <section
        className="section"
        ref={(el) => (sectionRefs.current[3] = el)}
        id="skills"
      >
        <Skills />
      </section>
      <hr />

    </div>
  );
}

export default BasePage;
