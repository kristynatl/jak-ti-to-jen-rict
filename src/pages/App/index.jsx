import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useLocation, useMatch } from 'react-router-dom';

import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileNavigation } from '../../components/MobileNavigation';

const navLinks = [
  { title: 'Jak ti to jen říct?', path: '/' },
  { title: 'Nácvik rozhovorů', path: '/nacvik-rozhovoru' },
  { title: 'O projektu', path: '/o-projektu' },
];

export const App = () => {
  const { pathname } = useLocation();
  const convoScriptMatch = useMatch('/nacvik-rozhovoru/:vek/:scenar');

  useEffect(() => {
    if (!convoScriptMatch) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <DesktopNavigation links={navLinks} />
      <Outlet />
      <MobileNavigation links={navLinks} />
    </>
  );
};
