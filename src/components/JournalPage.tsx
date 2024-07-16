import { Runs } from '@/Models/Runs';
import { Button, Center, Group, SimpleGrid, Slider, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import styles from './JournalPage.module.css';
import { use } from 'chai';

import { useRuns } from '../Hooks/useRuns';

export function JournalPage() {
  const { getRunsByUser, userRuns } = useRuns(); // Assuming useRuns returns these

  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [enjoyment, setEnjoyment] = useState();
  const [difficulty, setDifficulty] = useState();
  const [pain, setPain] = useState();
  const [effort, setEffort] = useState();
  const [note, setNote] = useState();

  const handleSubmit = async () => {
    await getRunsByUser(2);
    console.log(userRuns);
  };

  return (
    <>
      <Center>
        <div className={styles.singleRun}>
          <Group justify="center" grow>
            <Text style={{ paddingLeft: '12px', paddingBottom: '100px' }}>Run 1</Text>
            <Stack>
              <Text>distance</Text>
              <Text>time</Text>
              <Text>speed</Text>
            </Stack>

            <Stack>
              <Text>enjoyment</Text>
              <Text>difficulty</Text>
              <Text>pain</Text>
              <Text>effort</Text>
            </Stack>

            <Text>Notes</Text>
          </Group>
        </div>
      </Center>
      <Button onClick={handleSubmit}> get runs</Button>
      <Text>y</Text>
    </>
  );
}
