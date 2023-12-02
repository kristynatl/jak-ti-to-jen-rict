import './style.css';
import { motion } from 'framer-motion';

export const ResponseOption = ({ order, response, onClick }) => {
  const buttonVariants = {
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
      whileHover="hover"
      whileTap="active"
      className="response__option"
      onClick={onClick}
    >
      <span>{order}.</span> {response}
    </motion.button>
  );
};
