import './style.css';
import { motion, useAnimationControls } from 'framer-motion';

export const BookAnimation = () => {
  const imageFadeOutVariants = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 2,
        duration: 2,
      },
    },
    visible: {
      opacity: 1,
    },
  };

  const imageFadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 2,
      },
    },
  };

  return (
    <div className="how-to__book-container">
      <motion.img
        variants={imageFadeOutVariants}
        initial="visible"
        whileInView="hidden"
        exit="exit"
        className="how-to__book fade-out"
        src="/img/book.png"
        alt="kniha Děti to chtěj vědět taky"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="how-to__book"
        src="/img/book-hover.png"
        alt="kniha Děti to chtěj vědět taky"
      />
    </div>
  );
};
