import { useState, useEffect } from 'react';
import { Runs } from '../Models/Runs';
import { getRuns, getRunById as fetchRunById, addRun as createRun } from '../Services/RunService';

export const useRuns = () => {
  const [run, setRun] = useState<Runs[]>([]);
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

  const getRunById = async (id: number) => {
    try {
      const runFetch = await fetchRunById(id);
      setRun([...run, runFetch]);
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

  return { run, loading, error, getRunById, addRun, useRuns };
};
