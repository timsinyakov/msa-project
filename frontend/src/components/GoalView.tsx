import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem, Button } from '@mantine/core';
import { IconRun, IconSwimming } from '@tabler/icons-react';
import classes from './GoalView.module.css';
import { useContext, useEffect, useState } from 'react';
import { useRuns } from '@/Hooks/useRuns';
import { UserContext } from './context/contextCreate';
import { Link } from 'react-router-dom';

export function GoalView() {
  const userNow = useContext(UserContext);
  const { userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these
  const oneWeekAgo = new Date();

  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const [progress, setProgress] = useState<number>();
  const [percentage, setPercentage] = useState<number>(0);
  const [daysUntilSunday, setDaysUntilSunday] = useState(0);

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
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const recentRuns = userRuns.filter((run) => run.date && new Date(run.date) >= oneWeekAgo);
      console.log(recentRuns);
      const total = recentRuns.reduce((acc, run) => acc + run.distance, 0);

      setProgress(total);
      if (userNow?.goal) {
        const percent = total >= userNow.goal ? 100 : (total / userNow.goal) * 100;
        setPercentage(percent);
      }
    }
  }, [userRuns, userNow?.goal, userNow?.userUID]);

  useEffect(() => {
    const calculateDaysUntilSunday = () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
      setDaysUntilSunday(daysUntilSunday);
    };

    calculateDaysUntilSunday();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '80px' }}>
      <Paper radius="md" withBorder className={classes.card} mt={20}>
        <ThemeIcon className={classes.icon} size={60} radius={60}>
          <IconRun style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
        </ThemeIcon>

        <Text ta="center" fw={700} className={classes.title}>
          Running challenge
        </Text>
        <Text c="dimmed" ta="center" fz="sm">
          {userNow?.goal} km / week
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
          <Badge size="sm">{daysUntilSunday} days left</Badge>
        </Group>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
          }}
        >
          <Button component={Link} to="/setgoal">
            Set Goal
          </Button>
        </div>
      </Paper>
    </div>
  );
}
