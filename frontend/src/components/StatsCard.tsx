import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconRun } from '@tabler/icons-react';
import classes from './StatsCard.module.css';

export function StatsCard({goal} : {goal: number}) {
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconRun style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        Running Goal
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        {goal} km / week
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">20 / {goal} km</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  );
}