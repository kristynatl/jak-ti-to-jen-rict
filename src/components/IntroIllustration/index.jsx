import './style.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const IntroIllustration = () => {
  const [scrollValue, setScrollValue] = useState(null);

  const handleScroll = () => {
    const normalizedScrollValue = window.scrollY / window.innerHeight;

    setScrollValue(normalizedScrollValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollValueStyle = {
    '--scroll': scrollValue,
  };

  return (
    <div className="animation-container">
      <motion.img
        style={scrollValueStyle}
        className="intro__figure intro__figure--left"
        src="img/girl.webp"
        alt="Dívka"
      />
      <motion.img
        style={scrollValueStyle}
        className="intro__figure intro__figure--right"
        src="img/dad.webp"
        alt="Muž"
      />
      <div style={scrollValueStyle} className="scroll-indicator">
        <div className="scroll-indicator__arrow"></div>
        <div className="scroll-indicator__arrow"></div>
        <div className="scroll-indicator__arrow"></div>
      </div>
    </div>
  );
};
