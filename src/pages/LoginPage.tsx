import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import s from './auth.module.scss';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from ?? '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal login.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={s.container}>
      <Card style={{ maxWidth: '400px' }}>
        <h1 className={s.heading}>Masuk ke ArtikelKu</h1>
        <form className={s.form} onSubmit={handleSubmit}>
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
            Masuk
          </Button>
        </form>
        <p className={s.footer}>
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </Card>
    </div>
  );
}
