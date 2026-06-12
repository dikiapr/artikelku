import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import s from './MasterLayout.module.css';

export default function MasterLayout() {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.body}>
        <Sidebar />
        <main className={s.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
