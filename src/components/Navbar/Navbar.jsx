import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="hero-nav">
      <div className="nav-logo">Virtual Gem</div>
      
      {/* Mobile Toggle Trigger Icon */}
      <div className="nav-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Overlay Links */}
      <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-links">
         <a 
          href="#home" 
          onClick={(e) => {
          e.preventDefault(); // Stop default anchor jumping behavior
          setIsMenuOpen(false); // Shut mobile menu slider drawer
          window.scrollTo({ top: 0, behavior: 'smooth' }); // 🚀 Direct browser velocity command
          }}
         >
          Home
        </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contacts" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        {/* Scalable Social SVG Icons */}
        <div className="nav-socials">
          <a href="https://github.com/CDunkel1" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/cheralyn-dunkel-b27b93171" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
