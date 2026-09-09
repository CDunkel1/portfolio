import { useEffect, useState } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Detect if mouse is over a clickable element to change the glow effect
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .hero-floating-asset')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
  <div 
    className={`glowing-cursor ${isHovered ? 'cursor-expand' : ''}`}
    style={{
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`
    }}
  />
);
}

export default CustomCursor;
