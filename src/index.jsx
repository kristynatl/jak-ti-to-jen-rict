import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './pages/App';
import { HomePage } from './pages/HomePage';
// import { HowToPage } from './pages/HowToPage';
import { PracticePage } from './pages/PracticePage';
import { AboutPage } from './pages/AboutPage';
import './global.css';
import { ChooseAge } from './components/ChooseAge';
import { ChooseConvo } from './components/ChooseConvo';
import { ConvoScript } from './components/ConvoScript';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      // {
      //   path: 'jak-na-to',
      //   element: <HowToPage />,
      // },
      {
        path: 'nacvik-rozhovoru',
        element: <PracticePage />,
        children: [
          {
            path: '',
            element: <ChooseAge />,
          },
          {
            path: ':vek',
            element: <ChooseConvo />,
          },
          {
            path: ':vek/:scenar',
            element: <ConvoScript />,
          },
        ],
      },
      {
        path: '/o-projektu',
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
