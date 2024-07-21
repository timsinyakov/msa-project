import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem, Button } from '@mantine/core';
import { IconSwimming } from '@tabler/icons-react';
import classes from './GoalView.module.css';
import { useContext, useEffect, useState } from 'react';
import { useRuns } from '@/Hooks/useRuns';
import { UserContext } from './context/contextCreate';

const { userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these
const userNow = useContext(UserContext);

export function GoalView() {




    const[progress, setProgress] = useState(0);


  return (
    <div style={{width: '800px', margin: 'auto', marginTop: '30px'}}>
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconSwimming style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        Running challenge
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
        <Text fz="sm">20 / 36 km</Text>
        <Badge className={classes.badgeHover}size="sm" component="button" onClick={() => console.log("awd")}>Set Goal</Badge>
      </Group>
    </Paper>
    </div>
  );
}