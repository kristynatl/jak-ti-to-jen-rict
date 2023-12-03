import { motion } from 'framer-motion';

export const ResponseFeedback = ({ status, content }) => {
  const feedbackVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={feedbackVariants}
      initial="hidden"
      animate="visible"
      className={`convo__feedback ${status}`}
    >
      {content}
    </motion.div>
  );
};
