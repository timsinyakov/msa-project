import { Button, Drawer, Flex, Text } from '@mantine/core';
import styles from './JournalSingle.module.css';
import { useDisclosure } from '@mantine/hooks';

interface SingleRunProps {
  distance: number;
  speed: number;
  enjoyment: number;
  difficulty: number;
  pain: number;
  effort: number;
  note: string;
}

export const SingleRun = ({
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
          <h1>{distance}km</h1>
          <h1>{speed}km hr</h1>
        </Flex>

        <Flex direction="column">
          <Text>enjoy: {enjoyment}</Text>
          <Text>diff: {difficulty}</Text>
          <Text>pain: {pain}</Text>
          <Text>effort: {effort}</Text>
          <Text>{note}</Text>
        </Flex>
      </Flex>
    </>
  );
};
