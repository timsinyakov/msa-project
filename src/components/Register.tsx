import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './Register.module.css';
  import { useState } from 'react';
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
  import { Link, Navigate, useNavigate } from 'react-router-dom';
  import { getAuth, signInWithPopup } from 'firebase/auth';
import { useUsers } from '@/Hooks/useUsers';
  
  export interface IRegisterPageProps {}
  
  export const Register: React.FunctionComponent<IRegisterPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {addUser} = useUsers();
  
    const register = async () => {
      setAuthing(true);
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate('/run');
          addUser({Id: 0, userUID: userCredential.user.uid, goal: 0,})
          
        })
        .catch((error) => {
          console.log(error);
          setAuthing(false);
        });
    };
  
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component={Link} to={'/register'}>
            Create account
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Text c="red">{error}</Text>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" onClick={() => register()}>
            Sign in
          </Button>
        </Paper>
      </Container>
    );
  };
  
  export default Register;
  