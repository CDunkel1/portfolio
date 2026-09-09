import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectSlider.css';
 
import reelrushMockup from '../../assets/reelrush-mockup.png';  
import realestateMockup from '../../assets/realestate-mockup.png'; 
import inspiredSurfacesMockup from '../../assets/studio-mockup.png';

const projectsData = [
  /* 🚀 ADDED: Project ID 0 acts as your unique text layout landing card */
  {
    id: 0,
    title: "Overview",
    tagline: "Design & Interaction Philosophy",
    description: "My front-end development focus is centered around engineering high-fidelity web layouts that maximize user immersion and responsive control.",
    tags: ["UI/UX Engineering", "Responsive Systems", "Design Fidelity"],
    mediaType: "text",
    mediaSource: "", 
    liveLink: "#projects",
    githubLink: "",
    role: "Front-End Developer",
    timeline: "Ongoing",
    keyFeatures: [
      "Translating complex high-fidelity prototypes into modern web architectures.",
      "Structuring component-driven modular UI scopes.",
      "Maintaining strict layout stability across complex device viewports."
    ]
  },
  {
    id: 1,
    title: "ReelRush Movie Platform",
    tagline: "React Application Workspace",
    description: "A dynamic movie watchlist tracking workspace featuring modular UI hooks, intricate filter options, and asynchronous API media data streams.",
    tags: ["React", "JavaScript", "CSS Modules", "REST API"],
    mediaType: "image",
    mediaSource: reelrushMockup, 
    liveLink: "https://netlify.app",
    githubLink: "https://github.com",
    role: "Front-End Developer",
    timeline: "3 Weeks (Scrimba Career Path)",
    keyFeatures: [
      "Custom state management pipeline handling active watchlists.",
      "Asynchronous fetch calls tracking real-time dynamic movie database parameters.",
      "Completely fluid responsive grid scaling across device breakpoints."
    ]
  },
  {
    id: 2,
    title: "Luxury Real Estate Showcase",
    tagline: "High-End Property Presentation",
    description: "A pixel-perfect, highly responsive media presentation website built from custom design wireframes with fluid responsive grid structures.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    mediaType: "image",
    mediaSource: realestateMockup,
    liveLink: "https://netlify.app",
    githubLink: "https://github.com",
    role: "UI Engineer & Designer",
    timeline: "2 Weeks (Freelance Client)",
    keyFeatures: [
      "Strict layout implementation following high-fidelity design specifications.",
      "Custom price slider modules filtering active mock properties.",
      "Optimized modern asset compression yielding excellent performance speeds."
    ]
  },
  {
    id: 3,
    title: "Inspired Surfaces Portfolio",
    tagline: "Commercial Brand Strategy",
    description: "A customized layout design platform focusing on optimized digital brand asset management and rapid fluid design architectures built during internship training.",
    tags: ["HTML5", "CSS3", "JavaScript", "UI Optimization"],
    mediaType: "image",
    mediaSource: inspiredSurfacesMockup, 
    liveLink: "https://inspiredsurfaces.net",
    githubLink: "",
    role: "Front-End Intern",
    timeline: "4 Weeks (Corporate Internship)",
    keyFeatures: [
      "Transformed high-fidelity prototypes into completely fluid responsive pages.",
      "Streamlined high-resolution image distribution workflows.",
      "Refined existing navigation systems for improved client user experience metrics."
    ]
  }
];

function ProjectRowCard({ project }) {
  const [activeView, setActiveView] = useState('work');

  // Smoothly scrolls down to the ReelRush card (project-card-1) when clicking the arrow
  const scrollToNextProject = () => {
    const nextCard = document.getElementById('project-card-1');
    if (nextCard) {
      nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="browser-mockup-frame" id={`project-card-${project.id}`}>
      {/* macOS UI Title Bar Line */}
      <div className="browser-top-bar">
        <div className="system-dots">
          <span className="dot close"></span>
          <span className="dot minimize"></span>
          <span className="dot expand"></span>
        </div>
        <div className="browser-address-field">{project.title}</div>
        
        {/* Isolated Context View Pill Toggle */}
        <div className="view-toggle-pill">
          <button 
            className={`toggle-btn ${activeView === 'work' ? 'active' : ''}`}
            onClick={() => setActiveView('work')}
          >
            Work
          </button>
          <button 
            className={`toggle-btn ${activeView === 'info' ? 'active' : ''}`}
            onClick={() => setActiveView('info')}
          >
            Info
          </button>
        </div>
      </div>

      {/* Internal Display Viewport Screen */}
      <div className="browser-content-display">
        {activeView === 'work' ? (
          <div className="view-panel work-panel-animate">
            
            {/* 🚀 FIXED: The typography overlay is now locked strictly to card ID 0 */}
            {project.id === 0 ? (
              <div className="perry-inspiration-card">
                <div className="inspiration-content-overlay">
                  <h1 className="inspiration-main-heading">
                    I craft products,<br />interactions & stories.
                  </h1>
                  
                  <div className="inspiration-sub-details">
                    <p className="inspiration-role-text">Front-End Developer. Based in Michigan.</p>
                    <p className="inspiration-history-text">Specializing in React, UX Fidelity, and Responsive Systems.</p>
                  </div>
                  
                  <div className="inspiration-arrow-wrapper">
                    <div className="inspiration-bounce-arrow" onClick={scrollToNextProject}>↓</div>
                  </div>
                </div>
              </div>
            ) : (
              /* 🚀 MEDIA RENDERING LAYER: Cards 1, 2, & 3 show image screenshots/videos */
              <>
                {project.mediaType === 'video' ? (
                  <video 
                    src={project.mediaSource} 
                    className="fullscreen-project-graphics" 
                    autoPlay loop muted playsInline 
                  />
                ) : (
                  <img 
                    src={project.mediaSource} 
                    alt={`${project.title} Interface Preview`} 
                    className="fullscreen-project-graphics" 
                  />
                )}
              </>
            )}
          </div>
        ) : (
          /* INFO PANEL: Wide split engineering specifications details sheets */
          <div className="view-panel info-panel-animate">
            <div className="info-layout-grid">
              
              {/* Left Column metadata */}
              <div className="info-meta-column">
                <span className="info-tagline">{project.tagline}</span>
                <h3 className="info-display-title">{project.title}</h3>
                <p className="info-summary-text={project.description}">{project.description}</p>
                
                <div className="project-stats-block">
                  <p><strong>Role:</strong> {project.role}</p>
                  <p><strong>Timeline:</strong> {project.timeline}</p>
                </div>

                <div className="info-action-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-anchor primary">
                    Launch App <FaExternalLinkAlt className="icon-gap" />
                  </a>
                  {project.id !== 3 && project.id !== 0 && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-anchor secondary">
                      Source Code <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column objectives */}
              <div className="info-technical-column">
                <h4>Core Objectives & Architecture</h4>
                <ul className="engineering-bullet-list">
                  {project.keyFeatures.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <h4>Technologies Used</h4>
                <div className="tech-badge-container">
                  {project.tags.map((tag, idx) => (
                    <span className="framework-badge" key={idx}>{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectSlider() {
  return (
    <section className="projects-section" id="projects">
      

      {/* SINGLE-COLUMN VERTICAL GRID BLOCK TRACK */}
      <div className="projects-vertical-column-layout">
        {projectsData.map((project) => (
          <ProjectRowCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSlider;
