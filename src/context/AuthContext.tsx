import { createContext, useState, type ReactNode } from 'react';
import type { User } from '../types';
import * as authService from '../services/authService';

interface AuthContextValue {
  currentUser: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (data: { username: string; email: string; password: string }) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(authService.getCurrentUser);

  function login(email: string, password: string) {
    const user = authService.login(email, password);
    setCurrentUser(user);
  }

  function logout() {
    authService.logout();
    setCurrentUser(null);
  }

  function register(data: { username: string; email: string; password: string }) {
    const user = authService.register(data);
    const loggedIn = authService.login(user.email, user.password);
    setCurrentUser(loggedIn);
  }

  return (
    <AuthContext value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext>
  );
}
