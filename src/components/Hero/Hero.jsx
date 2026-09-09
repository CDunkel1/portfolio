
import HeroImg from '../../assets/hero-img.png'; // Your updated pink 3D asset file
import './Hero.css'; // Import the CSS file for styling

function Hero() {
  return (
    <header className="hero-container">
      <div className="hero-content-wrapper">
        {/* Left column: Text Content */}
        <div className="hero-text-side">
          <p className="hero-greeting">Hi, I'm Cheralyn,</p>
          <h1 className="hero-title text-animated-gradient">FRONTEND<br />DEVELOPER</h1>
          <p className="hero-description">
            Responsive By Nature, Creative by Code
          </p>
          <a href="#projects" className="hero-link">View My Projects</a>
        </div>

        {/* Right column: Edge-floating Visual Asset */}
        <div className="hero-image-side">
          <img 
            src={HeroImg} 
            alt="Abstract 3D Pink Accent Artwork" 
            className="hero-floating-asset"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
