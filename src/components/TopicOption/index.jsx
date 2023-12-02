import './style.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const TopicOption = ({ topic, order, path }) => {
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
      className="choose-convo__option"
    >
      <Link to={path} className="">
        {order}. {topic}
      </Link>
    </motion.button>
  );
};
