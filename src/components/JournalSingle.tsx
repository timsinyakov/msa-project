import { Button, Drawer, Flex, Text } from '@mantine/core';
import styles from './JournalSingle.module.css';
import { useDisclosure } from '@mantine/hooks';
import { StatsCard } from './StatsCard';

interface SingleRunProps {
  time: number;
  distance: number;
  speed: number;
  enjoyment: number;
  difficulty: number;
  pain: number;
  effort: number;
  note: string;
  goal: number;
}

export const SingleRun = ({
  goal,
  time,
  distance,
  speed,
  enjoyment,
  difficulty,
  pain,
  effort,
  note,
}: SingleRunProps) => {
  return (
    <>
      <Flex className={styles.back} justify="center" align="center">
        <Flex direction="column">
          <h1>{distance} km</h1>
          <h1>{speed} km/hr</h1>
          <h1>{time} min</h1>
        </Flex>

        <Flex direction="column" style={{marginLeft: '50px'}}>
          <Text>enjoy: {enjoyment}</Text>
          <Text>diff: {difficulty}</Text>
          <Text>pain: {pain}</Text>
          <Text>effort: {effort}</Text>
          <Text>note: {note}</Text>
        </Flex>


      </Flex>

    </>
  );
};
