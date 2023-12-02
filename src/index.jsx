import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './pages/App';
import { HowToPage } from './pages/HowToPage';
import { PracticePage } from './pages/PracticePage';
import { AboutPage } from './pages/AboutPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/jak-na-to',
    element: <HowToPage />,
  },
  {
    path: '/nacvik-rozhovoru/*',
    element: <PracticePage />,
  },
  {
    path: '/o-projektu',
    element: <AboutPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
