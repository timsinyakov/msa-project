import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage'; // Import the HomePage component
import { Run } from './pages/Run';
import { About } from './pages/About';
import { Journal } from './pages/Journal';
import { Goal } from './pages/Goal';
import { Stats } from './pages/Stats';
import { LoginPage } from './components/Login';
import AuthRoute from './components/AuthRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/run',
    element: <Run />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/journal',
    element: (
      <AuthRoute>
        <Journal />
      </AuthRoute>
    ),
  },
  {
    path: '/goal',
    element: <Goal />,
  },
  {
    path: '/stats',
    element: <Stats />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
