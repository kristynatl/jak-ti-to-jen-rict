import './style.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const TopicOption = ({ topic, order, path, state }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    active: {
      scale: 0.9,
    },
  };

  console.log(topic, state);

  return (
    <Link to={path} className="topic-option__link">
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="active"
        className="topic-option"
      >
        {order}. {topic}
      </motion.button>
    </Link>
  );
};
