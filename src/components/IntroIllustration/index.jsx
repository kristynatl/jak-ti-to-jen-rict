import './style.css';
import { motion } from 'framer-motion';

export const IntroIllustration = () => {
  const leftFigureVariants = {
    centered: { left: '10vw' },
    moved: {
      left: 0,
      bottom: '10%',
      transform: 'translateX(-45%)',
      transition: {
        type: 'spring',
        delay: 2,
        duration: 1,
      },
    },
  };

  const rightFigureVariants = {
    centered: { right: '10vw' },
    moved: {
      right: 0,
      bottom: '10%',
      transform: 'translateX(50%)',
      transition: {
        type: 'spring',
        delay: 2,
        duration: 1,
      },
    },
  };

  const bubbleVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 2,
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.img
        variants={bubbleVariants}
        initial="visible"
        animate="hidden"
        className="intro__bubble"
        src="img/bubble.png"
      />

      <motion.img
        variants={leftFigureVariants}
        initial="centered"
        animate="moved"
        className="intro__figure"
        src="img/girl.webp"
        alt="Dívka"
      />
      <motion.img
        variants={rightFigureVariants}
        initial="centered"
        animate="moved"
        className="intro__figure"
        src="img/dad.webp"
        alt="Muž"
      />
    </>
  );
};
