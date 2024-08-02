import { Runs } from '@/Models/Runs';
import {
  Avatar,
  Button,
  Card,
  Center,
  Group,
  SimpleGrid,
  Slider,
  Stack,
  Text,
} from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import styles from './JournalPage.module.css';
import { use } from 'chai';
import { useRuns } from '../Hooks/useRuns';
import { UserContext } from './context/contextCreate';
import { NewSingleRun } from './NewSingleRun';

export function JournalPage() {
  const { userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these
  const userNow = useContext(UserContext);
  const [deletionCount, setDeletionCount] = useState(0);

  useEffect(() => {
    if (userNow) {
      getRunsByUser(userNow?.userUID);
    }
  }, [userNow?.userUID, deletionCount]);

  const onDelete = () => {
    console.log('+1');
    setDeletionCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className={styles.scroll}>
        {userRuns?.map((run, index) => (
          <NewSingleRun
            goal={userNow?.goal || 0} // Provide a default value of 0 for the goal prop
            key={index}
            time={run.time}
            distance={run.distance}
            speed={
              isFinite(run.distance / run.time)
                ? (run.distance / (run.time / 60)).toFixed(2).toString() + ' km/hr'
                : 'No Data'
            }
            enjoyment={run.enjoyment}
            difficulty={run.difficulty}
            pain={run.pain}
            effort={run.effort}
            note={run.note}
            date={run.date}
            id={run.id}
            onDelete={onDelete} // Pass the delete handler to SingleRun
          />
        ))}
      </div>
    </>
  );
}
