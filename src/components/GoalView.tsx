import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem, Button } from '@mantine/core';
import { IconSwimming } from '@tabler/icons-react';
import classes from './GoalView.module.css';
import { useContext, useEffect, useState } from 'react';
import { useRuns } from '@/Hooks/useRuns';
import { UserContext } from './context/contextCreate';
import { Link } from 'react-router-dom';

export function GoalView() {
  const userNow = useContext(UserContext);
  const { userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these

  const [progress, setProgress] = useState<number>();
  const [percentage, setPercentage] = useState<number>();

  useEffect(() => {
    const fetchRuns = async () => {
      if (userNow?.userUID) {
        await getRunsByUser(userNow.userUID);
      }
    };

    fetchRuns();
  }, [userNow?.userUID]);

  useEffect(() => {
    if (userRuns) {
      const total = userRuns.reduce((acc, run) => acc + run.distance, 0);
      setProgress(total);
      if (userNow?.goal) {
        const percent = total >= userNow.goal ? 100 : (total / userNow.goal) * 100;
        setPercentage(percent);
      }
    }
  }, [userRuns, userNow?.goal, userNow?.userUID]);

  return (
    <div style={{ width: '800px', margin: 'auto', marginTop: '30px' }}>
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
            {percentage?.toFixed(2)}%
          </Text>
        </Group>
        {progress !== undefined && <Progress value={percentage} mt={5} />}

        <Group justify="space-between" mt="md">
          <Text fz="sm">
            {progress} / {userNow?.goal} km
          </Text>
          <Badge className={classes.badgeHover} size="sm" component={Link} to={'/setgoal'}>
            Set Goal
          </Badge>
        </Group>
      </Paper>
    </div>
  );
}
