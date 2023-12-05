import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const DesktopNavigation = ({ links }) => {
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

  const isActive = (link) => {
    if (link.path === '/' && location.pathname !== '/') {
      return false;
    }

    return location.pathname.includes(link.path);
  };

  return (
    <div className="desktop-nav">
      <nav className="desktop-nav__links">
        {links.map((link, index) => {
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
                  isActive(link) ? 'desktop-nav__link--current-page' : ''
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
