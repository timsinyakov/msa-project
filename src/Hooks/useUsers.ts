import { useState, useEffect } from 'react';
import { Users } from '../Models/Users';
import { getUsers, getUserById as fetchUserById, updateUser } from '../Services/UserService';

export const useUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const getUserById = async (id: number) => {
    try {
      const user = await fetchUserById(id);
      setUsers([user]);
    } catch (err) {
      setError('Failed to fetch user');
    }
  };

  const updateGoal = async (id: number, goal: number) => {
    try {
      const user = await fetchUserById(id);
      console.log(user);
      user.goal = goal;

      const a = updateUser(user);

      ///setUsers((prevUsers) => [...prevUsers, user]);
    } catch (errr) {
      setError('Failed to update goal');
    }
  };

  return { users, loading, error, getUserById, updateGoal };
};
