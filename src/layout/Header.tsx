import { Link } from 'react-router-dom';

export default function Header() {
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
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>
          Login
        </Link>
      </nav>
    </header>
  );
}
