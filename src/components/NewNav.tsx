import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  NavLink,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './NewNav.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { link: '/journal', label: 'journal' },
  { link: '/stats', label: 'stats' },
  { link: '/run', label: 'run' },
  { link: '/goal', label: 'goal' },
  { link: '/about', label: 'about' },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

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
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text component={Link} to="/" size="20px">
            RUN JOURNAL
          </Text>
          <Group h="100%" gap={0} visibleFrom="sm">
            {items}
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default" component={Link} to="/login">
              Login
            </Button>
            <Button variant="default" component={Link} to="/register">
              Register
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {items}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" component={Link} to="/login">
              Login
            </Button>
            <Button variant="default" component={Link} to="/register">
              Register
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
