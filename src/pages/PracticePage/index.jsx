import './style.css';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { useLocation, Outlet } from 'react-router-dom';

export const PracticePage = () => {
  const location = useLocation();
  return (
    <>
      <DesktopNavigation />
      <MobileTopPanel title="NÁCVIK ROZHOVORŮ" />
      <Outlet />
      <MobileNavigation />
    </>
  );
};
