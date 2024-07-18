import { useState, useEffect } from 'react';
import { Runs } from '../Models/Runs';
import { getRuns, getRunsByUserId as fetchRunById, getRunsByUserId } from '../Services/RunService';

export const useRuns = () => {
  const [runs, setRun] = useState<Runs[]>([]);

  const [userRuns, setUserRuns] = useState<Runs[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const allRuns = await getRuns();
        setRun(allRuns);
      } catch (err) {
        setError('Failed to fetch runs');
      } finally {
        setLoading(false);
      }
    };

    fetchRuns();
  }, []);

  // const getRunsByUser = async (id: number) => {
  //   try {
  //     const runFetch = await getRunsByUserId(id);
  //     setUserRuns(runFetch);
  //   } catch (err) {
  //     setError('Failed to fetch run');
  //   }
  // };

  return { runs, loading, error, userRuns };
};
