import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage' // Import the HomePage component
import { Run } from './pages/Run';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/run',
    element: <Run />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
