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


export function Header() {
  const { setColorScheme } = useMantineColorScheme();

  const theme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(theme === 'dark' ? 'light' : 'dark');
  };


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
