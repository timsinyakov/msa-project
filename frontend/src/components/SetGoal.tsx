import { Button, Center, Group, Paper, Slider, ThemeIcon, Text, Badge, rem } from '@mantine/core';
import { useContext, useState } from 'react';
import classes from './GoalView.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { useUsers } from '../Hooks/useUsers';
import { UserContext } from './context/contextCreate';
import { GoGoal } from 'react-icons/go';
import { Link } from 'react-router-dom';

export function SetGoal() {
  const userNow = useContext(UserContext);
  const { updateGoal } = useUsers();
  const navigate = useNavigate(); // Get the navigate function

  const [value, setValue] = useState(userNow?.goal ?? 0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    // Call your second function here
  };

  const handeClick = async () => {
    if (userNow?.userUID) {
      await updateGoal(userNow.userUID, value);
    }
    navigate('/goal'); // Navigate to the desired route
  };

  return (
    <>
      <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '30px' }}>
        <Paper radius="md" withBorder className={classes.card} mt={20}>
          <ThemeIcon className={classes.icon} size={60} radius={60}>
            <GoGoal style={{ width: rem(32), height: rem(32) }} />
          </ThemeIcon>

          <Text ta="center" fw={700} className={classes.title}>
            Running challenge
          </Text>

          <Group justify="space-between" mt="xs"></Group>

          <Slider
            value={value}
            onChange={handleChange}
            color="blue"
            marks={[
              { value: 0, label: '0km' },
              { value: 25, label: '25km' },
              { value: 50, label: '50km' },
              { value: 75, label: '75km' },
              { value: 100, label: '100km' },
            ]}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '50px',
            }}
          >
            <Button onClick={handeClick}>Update Goal</Button>
          </div>
        </Paper>
      </div>
    </>
  );
}
