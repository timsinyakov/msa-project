import {
  Button,
  Center,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import styles from './Header.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { LuDoorOpen } from 'react-icons/lu';
import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export function Header() {
  const { setColorScheme } = useMantineColorScheme();

  const theme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(theme === 'dark' ? 'light' : 'dark');
  };

  const auth = getAuth();
  const thisthing = () => {
    const user = auth.currentUser;
    if (user) {
      console.log(user.email);
    }

    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <>
      <Center>
        <Group justify="space-between" w="800px">
          <Group>
            <Button
              variant="outline"
              color={theme === 'dark' ? 'white' : 'black'}
              onClick={toggleColorScheme}
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
            >
              {theme === 'dark' ? (
                <>
                  <FaSun />
                </>
              ) : (
                <>
                  <FaMoon />
                </>
              )}
            </Button>
            <Button
              variant="outline"
              color={theme === 'dark' ? 'white' : 'black'}
              component={Link}
              to="/profile"
            >
              <CgProfile />
            </Button>
          </Group>

          <h1>RUN JOURNEY</h1>
          <Group>
            <Button
              variant="outline"
              color={theme === 'dark' ? 'white' : 'black'}
              component={Link}
              to="/login"
            >
              <MdLogin />
            </Button>
            <Button
              variant="outline"
              color={theme === 'dark' ? 'white' : 'black'}
              onClick={() => thisthing()}
            >
              <LuDoorOpen />
            </Button>
          </Group>
        </Group>
      </Center>
      <hr />
    </>
  );
}
