import './style.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'JAK NA TO', path: '/jak-na-to' },
  { title: 'NÁCVIK ROZHOVORŮ', path: '/nacvik-rozhovoru' },
  { title: 'O PROJEKTU', path: '/o-projektu' },
];

export const DesktopNavigation = () => {
  const linksVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    active: {
      scale: 0.9,
    },
  };

  return (
    <div className="desktop-nav">
      <nav className="desktop-nav__links">
        {navLinks.map((link, index) => {
          return (
            <motion.div
              key={index}
              variants={linksVariants}
              whileHover="hover"
              whileTap="active"
            >
              <Link to={link.path} className="desktop-nav__link">
                {link.title}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
};
