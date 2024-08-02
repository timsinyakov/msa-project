import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './About.module.css';

const mockdata = [
  {
    title: 'Easy',
    description:
      'Our app is user-friendly with an intuitive interface, making it easy for anyone to track runs and monitor progress effortlessly.',
    icon: IconGauge,
  },
  {
    title: 'Secure',
    description:
      'Our app uses Firebase for secure authentication and data storage, ensuring your information is protected with industry-leading security measures.',
    icon: IconUser,
  },
  {
    title: 'Responsive',
    description:
      'Our app is fully responsive, ensuring a seamless experience on both mobile and desktop devices. Enjoy consistent functionality and design, no matter where you use it.',
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Run Journal
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        An app to help track your running goals
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
