import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { currentUser, logout } = useAuth();

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      height: '56px',
      background: '#1e40af',
      color: '#fff',
      flexShrink: 0,
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.02em' }}>
        ArtikelKu
      </span>

      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.9rem' }}>
        {currentUser ? (
          <>
            <span style={{ color: '#bfdbfe' }}>
              Halo, <strong style={{ color: '#fff' }}>{currentUser.username}</strong>
            </span>
            <button
              onClick={logout}
              style={{
                background: 'transparent',
                border: '1px solid #93c5fd',
                color: '#fff',
                borderRadius: '6px',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
