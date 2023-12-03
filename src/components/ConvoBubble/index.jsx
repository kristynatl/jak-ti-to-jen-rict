import { motion } from 'framer-motion';

export const ConvoBubble = ({ speaker, status, content, scrollRef }) => {
  const convoBubbleVariants = {
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
      ref={scrollRef}
      variants={convoBubbleVariants}
      initial="hidden"
      animate="visible"
      className={`convo__bubble ${speaker} ${status}`}
    >
      {content}
    </motion.div>
  );
};
