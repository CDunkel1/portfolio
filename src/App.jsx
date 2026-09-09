import Hero from './components/Hero/Hero'
import ProjectSlider from './components/ProjectSlider/ProjectSlider';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import "./index.css"; // Import the CSS file for styling
import ContactFooter from './components/ContactFooter/ContactFooter'
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
  

  return (
    <>
      {/* 1. Navbar stays pinned or overlaid at the very top */}
      <Navbar />
      
      <main id="home">
        <CustomCursor />
        {/* 2. Hero: Introduction & dynamic greeting backdrop */}
        <Hero />
        
        {/* 3. Projects: High-fidelity browser cards with Work/Info buttons */}
        <ProjectSlider />
        
        {/* 4. About: Your background, Information Systems degree, and technical skills */}
        <About />
        <ContactFooter />
      </main>
    </>
  )
}

export default App
