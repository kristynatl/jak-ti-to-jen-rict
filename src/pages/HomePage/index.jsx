import './style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IntroIllustration } from '../../components/IntroIllustration';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';

export const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  setTimeout(() => {
    setIsVisible(true);
  }, 3000);

  return (
    <div className="container">
      <div className="intro">
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
        <IntroIllustration />
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 1 }}
              className="intro__info"
            >
              <h1 className="intro__heading">Jak ti to jen říct?</h1>
              <span className="intro__underline"></span>
              <p className="intro__description">
                online nástroj, který pomáhá rodičům a pečujícím osobám
                připravit se na rozhovor s dětmi o intimitě a respektování
                osobních hranic
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{isVisible && <MobileNavigation />}</AnimatePresence>
    </div>
  );
};
