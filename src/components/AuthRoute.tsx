import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(false);
        console.log('logged in');
      } else {
        setUser(false);
        console.log('unauthorized');
        navigate('/login');
      }
    });

    return () => AuthCheck();
  }, [auth]);

  return <>{children}</>;
};

export default AuthRoute;
