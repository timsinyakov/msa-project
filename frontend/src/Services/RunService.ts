import { Runs } from '../Models/Runs';
import config from '../Config';

const apiUrl = 'https://localhost:7034/api';

export const getRuns = async (): Promise<Runs[]> => {
  const response = await fetch(`${apiUrl}/Run/`);
  const data = await response.json();
  return data;
};
export const getRunById = async (id: number): Promise<Runs[]> => {
  const response = await fetch(`${apiUrl}/Run/${id}`);
  const data = await response.json();
  return data;
};

export const getRunsByUserUid = async (uid: string): Promise<Runs[]> => {
  const response = await fetch(`${apiUrl}/Run/user${uid}`);
  const data = await response.json();
  return data;
};

export const addRun = async (run: Runs): Promise<Runs> => {
  const response = await fetch(`${apiUrl}/Run`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const editRunById = async (run: Runs): Promise<Runs> => {
  const response = await fetch(`${apiUrl}/Run`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run),
  });

  console.log(run);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const delRun = async (id: number): Promise<void> => {
  const response = await fetch(`${apiUrl}/Run/?id=${id}`, {
    method: 'DELETE',
  });
  console.log('deleted');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
