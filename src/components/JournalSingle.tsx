import { Button, Drawer, Flex } from '@mantine/core';
import styles from './JournalSingle.module.css';
import { useDisclosure } from '@mantine/hooks';

interface SingleRunProps {
  distance: number;
  speed: number;
}

export const SingleRun = ({ distance, speed }: SingleRunProps) => {
  return (
    <>
      <Flex className={styles.back} justify="center" align="center">
        <Flex direction="column">
          <h1>{distance}km</h1>
          <h1>{speed}km hr</h1>
        </Flex>

        <Button className={styles.viewStats} size="md">
          View Stats
        </Button>
      </Flex>
    </>
  );
};
