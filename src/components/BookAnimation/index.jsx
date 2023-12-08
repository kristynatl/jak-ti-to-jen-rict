import './style.css';
import { motion, useAnimationControls } from 'framer-motion';

export const BookAnimation = () => {
  const imageFadeOutVariants = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 1,
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
        delay: 1,
        duration: 2,
      },
    },
  };

  return (
    <div className="book-animation">
      <motion.img
        variants={imageFadeOutVariants}
        initial="visible"
        whileInView="hidden"
        exit="exit"
        className="book-animation__book book-animation__book--fade-out"
        src="/img/book.png"
        alt="kniha Děti to chtěj vědět taky"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="book-animation__book"
        src="/img/book-hover.png"
        alt="kniha Děti to chtěj vědět taky"
      />
    </div>
  );
};
