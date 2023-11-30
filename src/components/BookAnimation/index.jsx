import './style.css';
import { motion } from 'framer-motion';

export const BookAnimation = () => {
  const imageFadeOutVariants = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 3,
        duration: 3,
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
        delay: 3,
        duration: 3,
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
        src="./pages/HowToPage/img/book.png"
        alt="kniha Děti to chtěj vědět taky"
      />
      <motion.img
        variants={imageFadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="how-to__book"
        src="./pages/HowToPage/img/book-hover.png"
        alt="kniha Děti to chtěj vědět taky"
      />
    </div>
  );
};
