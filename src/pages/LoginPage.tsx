import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginThunk } from '../store/slices/authSlice';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import s from './auth.module.scss';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const authError = useAppSelector((s) => s.auth.error);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from ?? '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(loginThunk({ email, password })).unwrap();
      navigate(from, { replace: true });
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
          {authError && <p className={s.formError}>{authError}</p>}
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
