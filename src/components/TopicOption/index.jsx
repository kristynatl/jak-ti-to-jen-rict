import { motion } from 'framer-motion';

export const TopicOption = ({ topic, order }) => {
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
      {order}. {topic}
    </motion.button>
  );
};
