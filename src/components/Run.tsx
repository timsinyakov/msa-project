import {
  Button,
  Checkbox,
  Group,
  Rating,
  TextInput,
  NumberInput,
  Fieldset,
  Flex,
} from '@mantine/core';
import { number } from 'prop-types';
import { useState } from 'react';
import styles from './Run.module.css';
import { getRunsByUserId } from '@/Services/RunService';
export function Demo() {
  const [enjoyment, setEnjoyment] = useState(0);
  const [challenge, setChallenge] = useState(0);
  const [effort, setEffort] = useState(0);
  const [soreness, setSoreness] = useState(0);

  const handeById = async () => {
    event?.preventDefault();
    console.log({ enjoyment, challenge, effort, soreness });

    const b = await getRunsByUserId(2);

    console.log(b);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handeById} style={{ marginTop: '70px' }}>
        <Fieldset legend="Entry">
          <NumberInput
            hideControls
            label="Distance:"
            suffix=" km"
            defaultValue={0}
            mt="md"
            allowNegative={false}
          />
          <NumberInput
            hideControls
            label="Time:"
            suffix=" min"
            defaultValue={0}
            mt="md"
            allowNegative={false}
          />
          <br></br>
          <Group justify="space-between">
            Enjoyment
            <Rating defaultValue={2} value={enjoyment} onChange={setEnjoyment} />
          </Group>

          <Group justify="space-between">
            Challenge
            <Rating defaultValue={2} value={challenge} onChange={setChallenge} />
          </Group>

          <Group justify="space-between">
            Soreness
            <Rating defaultValue={2} value={soreness} onChange={setSoreness} />
          </Group>

          <Group justify="space-between">
            Effort
            <Rating defaultValue={2} value={effort} onChange={setEffort} />
          </Group>
        </Fieldset>

        <Group justify="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}
