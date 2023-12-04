import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'Jak ti to jen říct?', path: '/' },
  { title: 'Nácvik rozhovorů', path: '/nacvik-rozhovoru' },
  { title: 'O projektu', path: '/o-projektu' },
];

export const DesktopNavigation = () => {
  const location = useLocation();

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
          const isActive = location.pathname === link.path;

          return (
            <motion.div
              key={index}
              variants={linksVariants}
              whileHover="hover"
              whileTap="active"
            >
              <Link
                to={link.path}
                className={`desktop-nav__link ${
                  isActive ? 'desktop-nav__link--current-page' : ''
                }`}
              >
                {link.title}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
};
