import { useState, useEffect } from 'react';
import { Runs } from '../Models/Runs';
import { getRuns, addRun as createRun, getRunsByUserId } from '../Services/RunService';

export const useRuns = () => {
  const [run, setRun] = useState<Runs[]>([]);
  const [userRuns, setUserRuns] = useState<Runs[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const runs = await getRuns();
        setRun(runs);
      } catch (err) {
        setError('Failed to fetch runs');
      } finally {
        setLoading(false);
      }
    };

    fetchRuns();
  }, []);

  const getRunsByUser = async (id: number) => {
    try {
      const runFetch = await getRunsByUserId(id);
      setUserRuns(runFetch);
    } catch (err) {
      setError('Failed to fetch run');
    }
  };

  const addRun = async (run: Runs) => {
    try {
      const newRun = await createRun(run);
      setRun((prevRuns) => [...prevRuns, newRun]);
    } catch (err) {
      setError('Failed to add run');
    }
  };

  return { run, loading, error, addRun, useRuns, getRunsByUser, userRuns };
};
