import { Link } from 'react-router-dom';
import './style.css';
import { motion } from 'framer-motion';

export const AgeGroup = ({ age, src, alt, path }) => {
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
    <Link to={path} className="age-group__link">
      <motion.button
        className="age-group"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="active"
      >
        <h2 className="age-group__age">{age}</h2>{' '}
        <img className="age-group__image" src={src} alt={alt} />
      </motion.button>
    </Link>
  );
};
