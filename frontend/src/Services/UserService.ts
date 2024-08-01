import { Users } from '../Models/Users';
import config from '../Config';

const { apiUrl } = config;

export const getUsers = async (): Promise<Users[]> => {
  const response = await fetch(`${apiUrl}/User/`);
  const data = await response.json();
  return data;
};

export const getUserById = async (id: number): Promise<Users> => {
  const response = await fetch(`${apiUrl}/User/${id}`);
  const data = await response.json();
  return data;
};

export const getUserByUID = async (uid: string): Promise<Users> => {
  const response = await fetch(`${apiUrl}/User/user${uid}`);
  const data = await response.json();
  return data;
};

export const updateUser = async (user: Users): Promise<Users[]> => {
  const response = await fetch(`${apiUrl}/User`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export const createUser = async (user: Users): Promise<Users[]> => {
  console.log("hello")

  const response = await fetch(`${apiUrl}/User`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
