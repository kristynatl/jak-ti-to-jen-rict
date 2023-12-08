import './style.css';

import { useLocation } from 'react-router';

export const MobileTopPanel = ({ links }) => {
  const location = useLocation();

  const getTitle = () => {
    const currentLink = links.find((link) => location.pathname === link.path);

    return currentLink ? currentLink.title : 'Nácvik rozhovorů';
  };

  return <div className="mobile-top-panel">{getTitle()}</div>;
};
