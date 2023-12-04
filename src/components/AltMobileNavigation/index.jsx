import './style.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuToggle } from '../MenuToggle';
import { useState } from 'react';

const navLinks = [
  { title: 'JAK NA TO', path: '/' },
  { title: 'NÁCVIK ROZHOVORŮ', path: '/nacvik-rozhovoru' },
  { title: 'O PROJEKTU', path: '/o-projektu' },
];

export const AltMobileNavigation = () => {
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
            return (
              <Link to={link.path} key={index} className="mobile-nav__link">
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
