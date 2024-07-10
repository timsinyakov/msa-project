import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage'; // Import the HomePage component
import { Run } from './pages/Run';
import { About } from './pages/About';
import { Journal } from './pages/Journal';
import { Goal } from './pages/Goal';
import { Stats } from './pages/Stats';
import { LoginPage } from './pages/Login';
import AuthRoute from './components/AuthRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/run',
    element: (
      <AuthRoute>
        <Run />
      </AuthRoute>
    ),
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
    element: (
      <AuthRoute>
        <Goal />
      </AuthRoute>
    ),
  },
  {
    path: '/stats',
    element: (
      <AuthRoute>
        <Stats />
      </AuthRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
