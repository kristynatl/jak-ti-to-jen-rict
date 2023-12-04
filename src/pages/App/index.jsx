import { Outlet } from 'react-router';
import { useLocation } from 'react-router';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileNavigation } from '../../components/MobileNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const pageTitlesByPath = {
  '/': 'Jak na to',
  '/nacvik-rozhovoru': 'Nácvik rozhovorů',
  '/o-projektu': 'O projektu',
};

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentTitle = pageTitlesByPath[currentPath];

  // const [isVisible, setIsVisible] = useState(false);

  // setTimeout(() => {
  //   setIsVisible(true);
  // }, 2000);

  return (
    <>
      {/* <AnimatePresence>
        {isVisible && ( */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <MobileTopPanel title={currentTitle} />
        <DesktopNavigation />
        <MobileNavigation />
      </motion.div>
      {/* )}
       </AnimatePresence> */}
      <Outlet />
    </>
  );
};
