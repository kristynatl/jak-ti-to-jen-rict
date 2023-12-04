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
    <>
      <motion.img
        // variants={bubbleVariants}
        // initial="visible"
        // animate="hidden"
        className="intro__bubble"
        src="img/bubble.png"
      />

      <motion.img
        style={scrollValueStyle}
        // variants={leftFigureVariants}
        // initial={scrollValue < 0.3 ? 'centered' : 'moved'}
        // animate="moved"
        className="intro__figure intro__figure--left"
        src="img/girl.webp"
        alt="Dívka"
      />
      <motion.img
        style={scrollValueStyle}
        // variants={rightFigureVariants}
        // initial="centered"
        // animate="moved"
        className="intro__figure intro__figure--right"
        src="img/dad.webp"
        alt="Muž"
      />
    </>
  );
};

// const leftFigureVariants = {
//   centered: { left: '50%', transform: 'tratranslateX(-100%)', bottom: '30%' },
//   moved: {
//     left: 0,
//     bottom: '10%',
//     transform: 'translateX(-45%)',
//     transition: {
//       type: 'spring',
//       stiffness: 35,
//       delay: 2,
//       duration: 1,
//     },
//   },
// };

// const rightFigureVariants = {
//   centered: {
//     right: '50%',
//     transform: 'tratranslateX(100%)',
//     bottom: '30%',
//   },
//   moved: {
//     right: 0,
//     bottom: '10%',
//     transform: 'translateX(50%)',
//     transition: {
//       type: 'spring',
//       stiffness: 35,
//       delay: 2,
//       duration: 1,
//     },
//   },
// };

// const bubbleVariants = {
//   visible: {
//     opacity: 1,
//   },
//   hidden: {
//     opacity: 0,
//     transition: {
//       delay: 2,
//       duration: 0.3,
//     },
//   },
// };
