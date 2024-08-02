import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/contextCreate';
import { Users } from '@/Models/Users';
import { useUsers } from '../Hooks/useUsers';

export interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [userNow, setUserNow] = useState<Users>();
  const { getUserByUID, localUser } = useUsers();

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const a = await getUserByUID(currentUser.uid);
        setUserNow(a);
        setUser(false);
      } else {
        setUser(false);
        navigate('/login');
      }
    });

    return () => AuthCheck();
  }, [auth, navigate]);

  return <UserContext.Provider value={userNow}>{children}</UserContext.Provider>;
};

export default AuthRoute;
