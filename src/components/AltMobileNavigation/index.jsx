import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuToggle } from '../MenuToggle';
import { useState } from 'react';

const navLinks = [
  { title: 'JAK NA TO', path: '/' },
  { title: 'NÁCVIK ROZHOVORŮ', path: '/nacvik-rozhovoru' },
  { title: 'O PROJEKTU', path: '/o-projektu' },
];

export const AltMobileNavigation = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

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
        mass: 0.7,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.nav animate={menuOpen ? 'open' : 'closed'}>
      {menuOpen && (
        <motion.nav
          className="mobile-nav__menu"
          variants={linksVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                to={link.path}
                key={index}
                className={`desktop-nav__link ${
                  isActive ? 'desktop-nav__link--current-page' : ''
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </motion.nav>
      )}
      <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
    </motion.nav>
  );
};
