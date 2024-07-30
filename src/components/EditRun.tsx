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
import { useContext, useEffect, useState } from 'react';
import styles from './EditRun.module.css';
import { eventMap } from '@testing-library/user-event/dist/types/event/eventMap';
import { useRuns } from '../Hooks/useRuns';
import { UserContext } from './context/contextCreate';
import { useNavigate, useParams } from 'react-router-dom';
import { Runs } from '@/Models/Runs';

export function EditRun() {
  const navigate = useNavigate();
  const { runId } = useParams();
  const { addRun, getRunsById, editRun } = useRuns();

  const [enjoyment, setEnjoyment] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [effort, setEffort] = useState(0);
  const [pain, setPain] = useState(0);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [note, setNote] = useState('');
  const [currentRun, setCurrentRun] = useState<Runs[] | undefined>();
  const [date, setDate] = useState();
  const userNow = useContext(UserContext);
  const [idNow, setIdNow] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    const fetchRuns = async () => {
      if (runId) {
        const run = await getRunsById(parseInt(runId));
        console.log(run);
        setCurrentRun(run);
        setDistance(run.distance);
        setTime(run.time);
        setEnjoyment(run.enjoyment);
        setDifficulty(run.difficulty);
        setEffort(run.effort);
        setPain(run.pain);
        setNote(run.note);
        setDate(run.date);
        setIdNow(run.id);
        setUserId(run.userUID);
      }
    };

    fetchRuns();
  }, [userNow?.userUID]);

  const handeById = async () => {
    event?.preventDefault();
    console.log('hi');
    // Assuming addRun expects an object with these properties
    const a = await editRun({
      id: idNow,
      userUID: userId,
      time: time,
      enjoyment: enjoyment,
      difficulty: difficulty,
      pain: pain,
      effort: effort,
      distance: distance,
      note: note,
      date: date,
    });

    console.log(a);
    navigate('/journal');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handeById} style={{ marginTop: '70px', width: '500px' }}>
        <Fieldset legend={'Run ' + runId} radius={10}>
          <NumberInput
            hideControls
            label="Distance:"
            suffix=" km"
            defaultValue={0}
            mt="md"
            allowNegative={false}
            value={distance}
            onChange={(value) => setDistance(Number(value))}
            required
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
            required
          />
          <br></br>
          <Group justify="space-between">
            Enjoyment
            <Rating defaultValue={2} value={enjoyment} onChange={setEnjoyment} size="lg" />
          </Group>

          <Group justify="space-between">
            Difficulty
            <Rating defaultValue={2} value={difficulty} onChange={setDifficulty} size="lg" />
          </Group>

          <Group justify="space-between">
            Effort
            <Rating defaultValue={2} value={effort} onChange={setEffort} size="lg" />
          </Group>

          <Group justify="space-between">
            Pain
            <Rating defaultValue={2} value={pain} onChange={setPain} size="lg" />
          </Group>

          <Textarea
            style={{ paddingTop: '10px' }}
            autosize
            maxLength={255}
            label="Notes"
            value={note}
            description="Displayed in journal"
            placeholder="Great run but long"
            onChange={(event) => setNote(event.currentTarget.value)}
          />
        </Fieldset>

        <Group justify="center" mt="md">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </div>
  );
}