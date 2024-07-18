import { Runs } from '@/Models/Runs';
import { Button, Center, Group, SimpleGrid, Slider, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import styles from './JournalPage.module.css';
import { use } from 'chai';

import { useRuns } from '../Hooks/useRuns';

export function JournalPage() {
  const { runs, userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these

  useEffect(() => {
    getRunsByUser(2);
  }, []);

  return (
    <>
      <Center>
        <div>
          {userRuns.map((run) => (
            <div className={styles.singleRun}>
              <Group justify="center" grow>
                <Text style={{ paddingLeft: '12px', paddingBottom: '100px' }}>Run {run.id}</Text>
                <Stack>
                  <Text>Distance: {run.distance}</Text>
                  <Text>time: {run.time}</Text>
                  <Text>speed: {run.distance / run.time}</Text>
                </Stack>

                <Stack>
                  <Text>enjoyment: {run.enjoyment}</Text>
                  <Text>difficulty: {run.difficulty}</Text>
                  <Text>pain: {run.pain}</Text>
                  <Text>effort: {run.effort}</Text>
                </Stack>

                <Text className={styles.runContainer}>Notes: {run.note}</Text>
              </Group>
            </div>
          ))}
        </div>
      </Center>
    </>
  );
}
