import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'JAK NA TO', path: '/' },
  { title: 'NÁCVIK ROZHOVORŮ', path: '/nacvik-rozhovoru' },
  { title: 'O PROJEKTU', path: '/o-projektu' },
];

export const MobileNavigation = () => {
  const location = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
      {/* {menuOpen && <div className="mobile-nav__overlay" onClick={closeMenu} />} */}
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
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
              const isActive = location.pathname === link.path;

              return (
                <Link
                  to={link.path}
                  key={index}
                  className={`mobile-nav__link ${
                    isActive ? 'mobile-nav__link--current-page' : ''
                  }`}
                  onClick={closeMenu}
                >
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
