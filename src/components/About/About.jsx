import React, { useState, useEffect, useRef } from 'react';
/* 🛠️ Standardize everything into universally stable FontAwesome packages */
import { 
  FaGraduationCap, FaLaptopCode, FaCode, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaReact, FaWordpress, FaNodeJs, FaNpm, FaPython, FaFigma 
} from 'react-icons/fa';
/* 🛠️ Importing generic file indicators if your brand logos are missing */
import { FaPalette, FaServer, FaInfinity, FaPenNib } from 'react-icons/fa'; 
import './About.css';

function About() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);

  // 14 items mapped out cleanly using bulletproof icon variables
  const stackIcons = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <FaNpm />, name: "NPM" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaPalette />, name: "Canva" },        /* Universal palette icon swap */
    { icon: <FaFigma />, name: "Figma" },          /* Universal figma icon */
    { icon: <FaServer />, name: "Netlify" },        /* Universal server icon swap */
    { icon: <FaPenNib />, name: "Photoshop" },      /* Universal drawing icon swap */
    { icon: <FaInfinity />, name: "VS Code" }       /* Universal code-loop swap */
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        
        {/* Left Side Info Box */}
        <div className="about-text-side">
          <span className="about-subtitle">My Journey</span>
          <h2 className="about-title">About Me</h2>
          <div className="title-divider"></div>
          
          <p className="about-paragraph">
            With a formal background holding a <strong>Bachelor's degree in Information Systems</strong>, 
            I bridge the gap between technical infrastructure and fluid user interface design. 
            My professional path is driven by a focus on crafting clean, optimized, and highly responsive web layouts.
          </p>
          <p className="about-paragraph">
            Currently refining my specialized engineering capabilities via the <strong>Scrimba Front End Developer Career Path</strong>, 
            I operate as an independent developer building highly tailored web assets for freelance clients. 
          </p>

          <div className="pillars-grid">
            <div className="pillar-item">
              <FaGraduationCap className="pillar-icon" />
              <div>
                <h4>Information Systems</h4>
                <p>Structured database theory & platform logistics</p>
              </div>
            </div>
            <div className="pillar-item">
              <FaLaptopCode className="pillar-icon" />
              <div>
                <h4>Front-End Development</h4>
                <p>Component architecture, reactive states, and styling modules</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side canopy canopy framework */}
        <div className="about-skills-side">
          <div className="skills-canopy-box">
            <h3>Technical Stack</h3>
            
            <div className={`canvas-spread-area ${isRevealed ? 'active' : ''}`}>
              <div className="center-core-node">
                <FaCode />
              </div>

              {stackIcons.map((item, idx) => (
                <div 
                  className="exploding-icon-node" 
                  key={idx}
    style={{ 
      '--icon-index': idx,
      /* 💡 ADD THIS LINE: Ensures individual delay stagger animations for each icon node particle */
      transitionDelay: `${idx * 65}ms`
    }}
    data-name={item.name}
                >
                  {item.icon}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
