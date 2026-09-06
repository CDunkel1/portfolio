import React from 'react';
import { FaGraduationCap, FaCode, FaLaptopCode, FaTools } from 'react-icons/fa';
import './About.css';

function About() {
  const technicalSkills = {
    languages: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
    frameworks: ["React", "WordPress", "Divi Builder"],
    tooling: ["VS Code", "Vite", "Git & GitHub", "Adobe XD", "Asana", "Mailchimp"]
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side: Summary & Story */}
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
            I focus on pixel-perfect fidelity, semantic code quality, and structured layout control.
          </p>

          {/* Core Professional Pillars */}
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

        {/* Right Side: Professional Tech Matrix */}
        <div className="about-skills-side">
          <div className="skills-card">
            <h3>Technical Matrix</h3>
            
            <div className="skills-group">
              <h4><FaCode className="group-icon" /> Core Stack</h4>
              <div className="skills-badge-list">
                {technicalSkills.languages.map((skill, idx) => (
                  <span key={idx} className="skill-badge color-stack">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-group">
              <h4><FaLaptopCode className="group-icon" /> Libraries & Frameworks</h4>
              <div className="skills-badge-list">
                {technicalSkills.frameworks.map((skill, idx) => (
                  <span key={idx} className="skill-badge color-framework">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-group">
              <h4><FaTools className="group-icon" /> Production Tooling</h4>
              <div className="skills-badge-list">
                {technicalSkills.tooling.map((skill, idx) => (
                  <span key={idx} className="skill-badge color-tool">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
