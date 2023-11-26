import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'JAK NA TO', path: '/jak-na-to' },
  { title: 'NÁCVIK ROZHOVORŮ', path: '/nacvik-rozhovoru' },
  { title: 'O PROJEKTU', path: '/o-projektu' },
];

export const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linksVariants = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: '-20%',
      transition: {
        type: 'spring',
        mass: 0.7,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 1 }}
        className="mobile-nav"
      >
        {menuOpen && (
          <motion.nav
            className="mobile-nav__links"
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
        <span className="mobile-nav__toggle" onClick={toggleMenu}>
          {menuOpen ? 'ZAVŘÍT' : 'MENU'}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

// const menuVariants = {
//   hidden: {
//     y: '100vh',
//   },
//   visible: {
//     y: 0,
//     transition: {
//       type: 'tween',
//       duration: 0.4,
//       when: 'beforeChildren',
//     },
//   },
//   exit: {
//     y: '100vh',
//   },
// };
