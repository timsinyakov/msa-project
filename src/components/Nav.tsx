import { useState } from 'react';
import {
  Container,
  Group,
  Burger,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './NewNav.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { LuDoorOpen } from 'react-icons/lu';

const links = [
  { link: '/journal', label: 'journal' },
  { link: '/stats', label: 'stats' },
  { link: '/run', label: 'run' },
  { link: '/goal', label: 'goal' },
  { link: '/about', label: 'about' },
];

export function Navbar() {
  const { setColorScheme } = useMantineColorScheme();

  const theme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(theme === 'dark' ? 'light' : 'dark');
  };

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const navigate = useNavigate();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <Text component={Link} to="/" size="20px">
            RUN JOURNAL
          </Text>
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
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}

          <Button
            variant="outline"
            color={theme === 'dark' ? 'white' : 'black'}
            component={Link}
            to="/login"
          >
            <MdLogin />
          </Button>
          <Button variant="outline" color={theme === 'dark' ? 'white' : 'black'} onClick={() => {}}>
            <LuDoorOpen />
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
