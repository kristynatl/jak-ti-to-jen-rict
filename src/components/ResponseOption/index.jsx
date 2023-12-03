import './style.css';
import { motion } from 'framer-motion';

export const ResponseOption = ({ order, response, onClick }) => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    active: {
      scale: 0.9,
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="active"
      className="response__option"
      onClick={onClick}
    >
      <span>{order}.</span> {response}
    </motion.button>
  );
};
