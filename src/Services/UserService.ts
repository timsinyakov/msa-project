import { Users } from '../Models/Users';
import config from '../Config';

const { apiUrl } = config;

export const getUsers = async (): Promise<Users[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const getUserById = async (id: number): Promise<Users> => {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  return data;
};
