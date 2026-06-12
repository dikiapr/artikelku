import type { User } from '../types';

const USERS_KEY = 'artikelku_users';
const SESSION_KEY = 'artikelku_session';

function loadUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? (JSON.parse(raw) as User[]) : [];
}

function saveUsers(users: User[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register(data: { username: string; email: string; password: string }): User {
  const users = loadUsers();
  if (users.find((u) => u.email === data.email)) {
    throw new Error('Email sudah terdaftar.');
  }
  const newUser: User = { id: Date.now().toString(), ...data };
  saveUsers([...users, newUser]);
  return newUser;
}

export function login(email: string, password: string): User {
  const user = loadUsers().find((u) => u.email === email && u.password === password);
  if (!user) throw new Error('Email atau password salah.');
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser(): User | null {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? (JSON.parse(raw) as User) : null;
}
