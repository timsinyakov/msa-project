import {
  Button,
  Checkbox,
  Group,
  Rating,
  TextInput,
  NumberInput,
  Fieldset,
  Flex,
  Textarea,
} from '@mantine/core';
import { number } from 'prop-types';
import { useContext, useState } from 'react';
import styles from './Run.module.css';
import { eventMap } from '@testing-library/user-event/dist/types/event/eventMap';
import { useRuns } from '../Hooks/useRuns';
import { UserContext } from './context/contextCreate';

export function Demo() {
  const { addRun } = useRuns();

  const [enjoyment, setEnjoyment] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [effort, setEffort] = useState(0);
  const [pain, setPain] = useState(0);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [note, setNote] = useState('');
  
  const userNow = useContext(UserContext);

  const handeById = async () => {
    event?.preventDefault();
    console.log('hi');
    // Assuming addRun expects an object with these properties
    const a = await addRun({
      id: 0,
      UserUID: userNow?.userUID,
      time: time,
      enjoyment: enjoyment,
      difficulty: difficulty,
      pain: pain,
      effort: effort,
      distance: distance,
      note: note,
    });

    console.log(a);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handeById} style={{ marginTop: '70px', width: '330px' }}>
        <Fieldset legend="New Run" radius={10}>
          <NumberInput
            hideControls
            label="Distance:"
            suffix=" km"
            defaultValue={0}
            mt="md"
            allowNegative={false}
            value={distance}
            onChange={(value) => setDistance(Number(value))}
          />
          <NumberInput
            hideControls
            label="Time:"
            suffix=" min"
            defaultValue={0}
            mt="md"
            allowNegative={false}
            value={time}
            onChange={(value) => setTime(Number(value))}
          />
          <br></br>
          <Group justify="space-between">
            Enjoyment
            <Rating defaultValue={2} value={enjoyment} onChange={setEnjoyment} />
          </Group>

          <Group justify="space-between">
            Difficulty
            <Rating defaultValue={2} value={difficulty} onChange={setDifficulty} />
          </Group>

          <Group justify="space-between">
            Effort
            <Rating defaultValue={2} value={effort} onChange={setEffort} />
          </Group>

          <Group justify="space-between">
            Pain
            <Rating defaultValue={2} value={pain} onChange={setPain} />
          </Group>

          <Textarea
            style={{ paddingTop: '10px' }}
            autosize
            maxLength={255}
            label="Notes"
            description="Displayed in journal"
            placeholder="Great run but long"
            onChange={(event) => setNote(event.currentTarget.value)}
          />
        </Fieldset>

        <Group justify="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}
