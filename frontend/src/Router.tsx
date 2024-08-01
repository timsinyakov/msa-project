import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage'; // Import the HomePage component
import { Run } from './pages/Run';
import { About } from './pages/About';
import { Journal } from './pages/Journal';
import { Goal } from './pages/Goal';
import { Stats } from './pages/Stats';
import { LoginPage } from './pages/Login';
import AuthRoute from './components/AuthRoute';
import { useState } from 'react';
import { UserContext } from './components/context/contextCreate';
import { Users } from './Models/Users';
import Register from './components/Register';
import { GoalView } from './components/GoalView';
import { ViewGoalPage } from './pages/ViewGoalPage';
import { HeaderMegaMenu } from './components/NewNav';
import { RegisterPage } from './pages/Register';
import { EditRun } from './components/EditRun';
import { EditPage } from './pages/EditPage';

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
        <ViewGoalPage />
      </AuthRoute>
    ),
  },
  {
    path: '/setgoal',
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
  {
    path: '/register',

    element: <RegisterPage />,
  },
  {
    path: '/na',
    element: <HeaderMegaMenu />,
  },
  {
    path: '/edit/:runId',
    element: <EditPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
