import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss';

export default function Sidebar() {
  const cls = ({ isActive }: { isActive: boolean }) =>
    `${s.link}${isActive ? ` ${s.active}` : ''}`;

  return (
    <aside className={s.sidebar}>
      <NavLink to="/" end className={cls}>Home</NavLink>
      <NavLink to="/write" className={cls}>Tulis Artikel</NavLink>
    </aside>
  );
}
