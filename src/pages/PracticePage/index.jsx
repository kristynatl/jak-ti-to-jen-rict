import './style.css';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { ChooseAge } from '../../components/ChooseAge';
import { ChooseConvo } from '../../components/ChooseConvo';
import { ConvoScript } from '../../components/ConvoScript';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';

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
