import './style.css';

import { motion } from 'framer-motion';

export const ActionButton = ({ label, onClick, scrollRef }) => {
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
      className="action-button"
      ref={scrollRef}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};
