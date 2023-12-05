import { Outlet } from 'react-router';
import { useLocation } from 'react-router';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { motion } from 'framer-motion';
import { AltMobileNavigation } from '../../components/AltMobileNavigation';

const pageTitlesByPath = {
  '/': 'Jak ti to jen říct?',
  '/nacvik-rozhovoru': 'Nácvik rozhovorů',
  '/o-projektu': 'O projektu',
};

export const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentTitle = pageTitlesByPath[currentPath];

  return (
    <>
      <DesktopNavigation />
      <Outlet />
      <MobileTopPanel title={currentTitle} />
      <AltMobileNavigation />
    </>
  );
};
