import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import { UserContext } from './components/context/contextCreate';
import { Users } from './Models/Users';
import { useState } from 'react';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (prop) => {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
};

export default Application;
