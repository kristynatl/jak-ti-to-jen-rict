import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { MobileNavigation } from '../../components/MobileNavigation';

const navLinks = [
  { title: 'Jak ti to jen říct?', path: '/' },
  { title: 'Nácvik rozhovorů', path: '/nacvik-rozhovoru' },
  { title: 'O projektu', path: '/o-projektu' },
];

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <DesktopNavigation links={navLinks} />
      <Outlet />
      {/* <MobileTopPanel links={navLinks} /> */}
      <MobileNavigation links={navLinks} />
    </>
  );
};
