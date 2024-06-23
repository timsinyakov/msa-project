import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage' // Import the HomePage component
import { Run } from './pages/Run';
import { About } from './pages/About';
import { Journal } from './pages/Journal';
import { Goal } from './pages/Goal';
import { Stats } from './pages/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/run',
    element: <Run />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/journal',
    element: <Journal />
  },
  {
    path: '/goal',
    element: <Goal />
  },
  {
    path: '/stats',
    element: <Stats />
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
