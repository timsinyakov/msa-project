import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    setAuthing(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        navigate('/run');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={() => login()} disabled={authing}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
