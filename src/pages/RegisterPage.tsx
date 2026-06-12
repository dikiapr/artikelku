import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import s from './auth.module.scss';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError('Semua kolom wajib diisi.');
      return;
    }
    setLoading(true);
    try {
      register({ username: username.trim(), email: email.trim(), password });
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal mendaftar.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={s.container}>
      <Card style={{ maxWidth: '400px' }}>
        <h1 className={s.heading}>Daftar Akun Baru</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="nama_pengguna"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="contoh@email.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
          {error && <p className={s.formError}>{error}</p>}
          <Button type="submit" loading={loading} style={{ width: '100%' }}>
            Daftar
          </Button>
        </form>
        <p className={s.footer}>
          Sudah punya akun? <Link to="/login">Masuk di sini</Link>
        </p>
      </Card>
    </div>
  );
}
