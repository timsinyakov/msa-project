import { Runs } from '../Models/Runs';
import config from '../Config';

const { apiUrl } = config;

export const getRuns = async (): Promise<Runs[]> => {
  const response = await fetch(`${apiUrl}/Run/`);
  const data = await response.json();
  return data;
};

export const getRunById = async (id: number): Promise<Runs> => {
  const response = await fetch(`${apiUrl}/Run/${id}`);
  const data = await response.json();
  return data;
};
