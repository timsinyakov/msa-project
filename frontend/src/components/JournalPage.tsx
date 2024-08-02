import { useContext, useEffect, useState } from 'react';
import styles from './JournalPage.module.css';
import { useRuns } from '../Hooks/useRuns';
import { UserContext } from './context/contextCreate';
import { NewSingleRun } from './NewSingleRun';
import { Loader } from '@mantine/core';

export function JournalPage() {
  const { userRuns, getRunsByUser } = useRuns();
  const userNow = useContext(UserContext);
  const [deletionCount, setDeletionCount] = useState(0);

  useEffect(() => {
    if (userNow) {
      getRunsByUser(userNow?.userUID);
    }
  }, [userNow?.userUID, deletionCount]);

  const onDelete = () => {
    setDeletionCount((prevCount) => prevCount + 1);
  };

  if (!userRuns || userRuns.length === 0) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}
      >
        <Loader color="blue" type="dots" />
      </div>
    );
  }

  return (
    <>
      <div className={styles.scroll}>
        {userRuns?.map((run, index) => (
          <NewSingleRun
            goal={userNow?.goal || 0}
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
            date={run.date || null}
            id={run.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}
