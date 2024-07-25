import { Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from '@tabler/icons-react';
import classes from './AllStats.module.css';
import { useRuns } from '@/Hooks/useRuns';
import { UserContext } from './context/contextCreate';
import { useContext, useEffect, useState } from 'react';

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

export function AllStats() {
  const userNow = useContext(UserContext);

  const { userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these
  const [totalUserDis, setDisOne] = useState(0);
  const [amountRuns, setAmountRunsOne] = useState(0);
  const [amountTime, setAmountTimeOne] = useState(0);
  const [averageSpeed, setAverageSpeedOne] = useState(0);

  const [totalUserDisTwo, setDisTwo] = useState(1);
  const [amountRunsTwo, setAmountRunsTwo] = useState(0);
  const [amountTimeTwo, setAmountTimeTwo] = useState(1);
  const [averageSpeedTwo, setAverageSpeedTwo] = useState(1);

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
      const twoWeekAgo = new Date();

      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      twoWeekAgo.setDate(twoWeekAgo.getDate() - 14);

      const thisWeekRuns = userRuns.filter((run) => new Date(run.date) >= oneWeekAgo);

      const lastWeekRuns = userRuns.filter(
        (run) => oneWeekAgo <= new Date(run.date) && new Date(run.date) >= twoWeekAgo
      );

      const totalDistanceOne = thisWeekRuns.reduce((acc, run) => acc + run.distance, 0);
      const totalRunsOne = thisWeekRuns.length;
      const totalTimeOne = thisWeekRuns.reduce((acc, run) => acc + run.time, 0);
      const totalSpeedOne = thisWeekRuns.reduce(
        (acc, run) => acc + run.distance / (run.time / 60),
        0
      );

      setDisOne(totalDistanceOne);
      setAmountRunsOne(totalRunsOne);
      setAmountTimeOne(totalTimeOne);
      setAverageSpeedOne(totalSpeedOne / thisWeekRuns.length);

      const totalDistanceTwo = lastWeekRuns.reduce((acc, run) => acc + run.distance, 0);
      const totalRunsTwo = lastWeekRuns.length;
      const totalTimeTwo = lastWeekRuns.reduce((acc, run) => acc + run.time, 0);
      const totalSpeedTwo = lastWeekRuns.reduce(
        (acc, run) => acc + run.distance / (run.time / 60),
        0
      );

      setDisOne(totalDistanceTwo);
      setAmountRunsOne(totalRunsTwo);
      setAmountTimeOne(totalTimeTwo);
      setAverageSpeedOne(totalSpeedTwo / lastWeekRuns.length);
    }
  }, [userRuns]);

  const data = [
    {
      title: 'Total Distance',
      icon: 'receipt',
      value: totalUserDis.toString() + ' km',
      diff: totalUserDis - totalUserDisTwo,
    },

    {
      title: 'Average Speed',
      icon: 'discount',
      value: averageSpeed.toFixed(2) + ' km/hr',
      diff: ((averageSpeed / averageSpeedTwo) * 100).toFixed(2),
    },
    { title: 'Total Runs', icon: 'user', value: amountRuns, diff: amountRuns - amountRunsTwo },
  ];

  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
            <span>{stat.diff}</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>{stats}</SimpleGrid>
    </div>
  );
}
