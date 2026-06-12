import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import s from './Header.module.css';

export default function Header() {
  const { currentUser, logout } = useAuth();

  return (
    <header className={s.header}>
      <span className={s.brand}>ArtikelKu</span>
      <nav className={s.nav}>
        {currentUser ? (
          <>
            <span className={s.greeting}>
              Halo, <strong>{currentUser.username}</strong>
            </span>
            <button className={s.logoutBtn} onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className={s.loginLink}>Login</Link>
        )}
      </nav>
    </header>
  );
}
