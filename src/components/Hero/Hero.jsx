

import avatar from '../../assets/avatar.png'; // Import the avatar image
import './Hero.css'; // Import the CSS file for styling
function Hero() {
  return (
    <header className="hero-container">
   
      <div className="hero-content-wrapper">
        {/* Left column: Text Content */}
        <div className="hero-text-side">
          <p className="hero-greeting">Hi, I'm Cheralyn,</p>
          <h1 className="hero-title">FRONTEND<br />DEVELOPER</h1>
          <p className="hero-description">
            Responsive By Nature, Creative by Code
          </p>
          <a href="#projects" className="hero-link">View My Projects</a>
        </div>

        {/* Right column: Character Image */}
        <div className="hero-image-side">
          <img 
            src={avatar} 
            alt="Cheralyn Avatar" 
            className="hero-avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
