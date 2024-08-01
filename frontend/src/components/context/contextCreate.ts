import { createContext } from 'react';
import { User } from '../Users';

export const UserContext = createContext<User | undefined>(undefined);
