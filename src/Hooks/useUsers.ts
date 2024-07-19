import { useState, useEffect } from 'react';
import { Users } from '../Models/Users';
import {
  getUsers,
  getUserById as fetchUserById,
  updateUser,
  getUserByUID as getUID,
  createUser,
} from '../Services/UserService';

export const useUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [localUser, setLocalUser] = useState<Users>();

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

  const getUserByUID = async (uid: string) => {
    try {
      const user = await getUID(uid);
      return user;
    } catch (err) {
      console.log(err);
      setError('Failed to fetch user');
    }
  };

  const updateGoal = async (uid: string, goal: number) => {
    try {
      const user = await getUID(uid);
      console.log("wasawd")
      console.log(user);
      user.goal = goal;

      const a = updateUser(user);

      ///setUsers((prevUsers) => [...prevUsers, user]);
    } catch (errr) {
      setError('Failed to update goal');
    }
  };

  const addUser = async (user: Users) => {
    try {
      const thin = await createUser(user);
      
    } catch (err) {
      setError('Failed to add user');
    }
  }

  return { users, loading, error, getUserById, updateGoal, getUserByUID, localUser, addUser };
};
