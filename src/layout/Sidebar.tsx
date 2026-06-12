import { NavLink } from 'react-router-dom';

const linkStyle: React.CSSProperties = {
  display: 'block',
  padding: '0.6rem 1rem',
  borderRadius: '6px',
  color: '#1e40af',
  textDecoration: 'none',
  fontWeight: 500,
};

const activeStyle: React.CSSProperties = {
  ...linkStyle,
  background: '#dbeafe',
  color: '#1d4ed8',
};

export default function Sidebar() {
  return (
    <aside style={{
      width: '200px',
      flexShrink: 0,
      borderRight: '1px solid #e5e7eb',
      padding: '1rem 0.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    }}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => isActive ? activeStyle : linkStyle}
      >
        Home
      </NavLink>
      <NavLink
        to="/write"
        style={({ isActive }) => isActive ? activeStyle : linkStyle}
      >
        Tulis Artikel
      </NavLink>
    </aside>
  );
}
