import { Outlet } from 'react-router';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileNavigation } from '../../components/MobileNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';

export const App = () => {
  return (
    <>
      <MobileTopPanel />
      <DesktopNavigation />
      <Outlet />
      <MobileNavigation />
    </>
  );
};
