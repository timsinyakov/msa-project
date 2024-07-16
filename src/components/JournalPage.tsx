import { Runs } from '@/Models/Runs';
import { getRuns } from '@/Services/RunService';
import { Button, Center, Group, SimpleGrid, Slider, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import styles from './JournalPage.module.css';

export function JournalPage() {
  const [runs, setRuns] = useState({
    id: 1,
    userId: 1,
    distance: 0,
    time: 23,
    enjoyment: 1,
    difficulty: 2,
    pain: 3,
    effort: 4,
    note: 'great run',
  });
  const handleSubmit = async () => {
    const allRuns = await getRuns();
    console.log(runs);
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
      <Text>{JSON.stringify(runs)}</Text>
    </>
  );
}
