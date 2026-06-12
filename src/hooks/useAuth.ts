import { use } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
  const ctx = use(AuthContext);
  if (!ctx) throw new Error('useAuth harus dipakai di dalam AuthProvider');
  return ctx;
}
