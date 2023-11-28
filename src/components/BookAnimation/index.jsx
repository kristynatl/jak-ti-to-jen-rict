import './style.css';
import { motion } from 'framer-motion';

// NEDOKONČENÉ - chci, aby obrázky byly na sobě a postupně se jeden změnil v druhý

export const BookAnimation = () => {
  const imageFadeOutVariants = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 5,
        duration: 5,
      },
    },
    visible: {
      opacity: 1,
    },

    exit: {
      opacity: 0,
    },
  };

  const imageFadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 5,
        duration: 5,
      },
    },
  };

  return (
    <>
      <motion.img
        variants={imageFadeOutVariants}
        initial="visible"
        whileInView="hidden"
        exit="exit"
        className="how-to__book"
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
    </>
  );
};
