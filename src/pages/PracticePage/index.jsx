import './style.css';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { ChooseAge } from '../../components/ChooseAge';
import { ChooseConvo } from '../../components/ChooseConvo';
import { ConvoScript } from '../../components/ConvoScript';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';

const ageGroups = [
  {
    id: 'predskolni-vek',
    text: 'Předškolní věk',
    src: './../pages/PracticePage/img/child1.png',
    alt: 'Ilustrace dítěte v předškolním věku',
    path: '/nacvik-rozhovoru/predskolni-vek',
  },
  {
    id: 'mladsi-skolni-vek',
    text: 'Mladší školní věk',
    src: './../pages/PracticePage/img/child2.png',
    alt: 'Ilustrace dítěte v mladším školním věku',
    path: '/nacvik-rozhovoru/mladsi-skolni-vek',
  },
  {
    id: 'dospivani',
    text: 'Dospívání',
    src: './../pages/PracticePage/img/child3.png',
    alt: 'Ilustrace dospívajícího dítěte',
    path: '/nacvik-rozhovoru/dospivani',
  },
];

export const PracticePage = () => {
  const location = useLocation();
  return (
    <>
      <DesktopNavigation />
      <MobileTopPanel title="NÁCVIK ROZHOVORŮ" />
      <ChooseAge ageGroups={ageGroups} />
      {/* <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ChooseAge ageGroups={ageGroups} />} />
        <Route path="/:id" element={<ChooseConvo ageGroups={ageGroups} />} />
        <Route path="/tady-bude-cesta-ke-scenari" element={<ConvoScript />} />
      </Routes> */}
      <MobileNavigation />
    </>
  );
};
