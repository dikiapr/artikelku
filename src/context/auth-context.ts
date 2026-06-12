import { createContext } from 'react';
import type { User } from '../types';

export interface AuthContextValue {
  currentUser: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (data: { username: string; email: string; password: string }) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
