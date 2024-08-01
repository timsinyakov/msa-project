import { createContext } from 'react';
import { Users } from '../../Models/Users';
export const UserContext = createContext<Users | undefined>(undefined);
