import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuToggle } from '../MenuToggle';
import { useState } from 'react';

export const MobileNavigation = ({ links }) => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const linksVariants = {
    hidden: {
      x: '-100vw',
      y: -70,
    },
    visible: {
      x: 30,
      y: -70,
      transition: {
        type: 'spring',
        mass: 0.5,
        delay: 0.2,
      },
    },
  };

  const isActive = (link) => {
    if (link.path === '/' && location.pathname !== '/') {
      return false;
    }

    return location.pathname.includes(link.path);
  };

  return (
    <>
      {menuOpen && <div className="mobile-nav__overlay" onClick={closeMenu} />}
      <motion.nav
        className="mobile-altnav"
        animate={menuOpen ? 'open' : 'closed'}
      >
        {menuOpen && (
          <motion.nav
            className="mobile-nav__menu"
            variants={linksVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link, index) => {
              return (
                <Link
                  to={link.path}
                  key={index}
                  className={`mobile-nav__link ${
                    isActive(link) ? 'mobile-nav__link--current-page' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </motion.nav>
        )}
        <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
      </motion.nav>
    </>
  );
};
