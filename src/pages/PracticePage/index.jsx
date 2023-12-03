import './style.css';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { Outlet } from 'react-router-dom';

export const PracticePage = () => {
  return (
    <>
      <MobileTopPanel title="NÁCVIK ROZHOVORŮ" />
      <Outlet />
    </>
  );
};
