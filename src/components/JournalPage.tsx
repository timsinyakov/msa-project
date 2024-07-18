import { Runs } from '@/Models/Runs';
import { Button, Center, Group, SimpleGrid, Slider, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import styles from './JournalPage.module.css';
import { use } from 'chai';

import { useRuns } from '../Hooks/useRuns';

export function JournalPage() {
  const { runs, userRuns } = useRuns(); // Assuming useRuns returns these

  const handleSubmit = async () => {
    runs.map((run) => console.log(run));
  };

  return (
    <div>
      <Button onClick={handleSubmit}></Button>
      <h2>Run List</h2>
      <ul>
        {runs.map((run) => (
          <div>{JSON.stringify(run.id)}</div>
        ))}
      </ul>

      {JSON.stringify(runs[8])}
    </div>
  );
}
