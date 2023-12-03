import { Outlet } from 'react-router';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileNavigation } from '../../components/MobileNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  setTimeout(() => {
    setIsVisible(true);
  }, 3000);

  return (
    <>
      <MobileTopPanel />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <DesktopNavigation />
          </motion.div>
        )}
      </AnimatePresence>
      <Outlet />
      <AnimatePresence>{isVisible && <MobileNavigation />}</AnimatePresence>
    </>
  );
};
