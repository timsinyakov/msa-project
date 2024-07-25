import { Runs } from '@/Models/Runs';
import {
  Avatar,
  Button,
  Card,
  Center,
  Group,
  ScrollArea,
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
import { SingleRun } from './JournalSingle';

export function JournalPage() {
  const { userRuns, getRunsByUser } = useRuns(); // Assuming useRuns returns these
  const userNow = useContext(UserContext);

  useEffect(() => {
    getRunsByUser(userNow?.userUID);
  }, [userNow?.userUID]);

  return (
    <>
      <div className={styles.scroll}>
        {userRuns?.map((run, index) => (
          <SingleRun
            goal={userNow?.goal}
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
          />
        ))}
      </div>
    </>
  );
}
