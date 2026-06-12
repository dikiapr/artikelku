import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/slices/authSlice';
import * as authService from '../services/authService';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import s from './Header.module.scss';

export default function Header() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((s) => s.auth.currentUser);
  const [confirmOpen, setConfirmOpen] = useState(false);

  function handleLogout() {
    authService.logout();
    dispatch(logout());
    setConfirmOpen(false);
  }

  return (
    <>
      <header className={s.header}>
        <span className={s.brand}>ArtikelKu</span>
        <nav className={s.nav}>
          {currentUser ? (
            <>
              <span className={s.greeting}>
                Halo, <strong>{currentUser.username}</strong>
              </span>
              <button className={s.logoutBtn} onClick={() => setConfirmOpen(true)}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className={s.loginLink}>Login</Link>
          )}
        </nav>
      </header>

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Konfirmasi Logout"
      >
        <p style={{ color: 'var(--gray-500)', marginBottom: '1.25rem' }}>
          Yakin ingin keluar dari akun <strong>{currentUser?.username}</strong>?
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
          <Button variant="secondary" size="sm" onClick={() => setConfirmOpen(false)}>
            Batal
          </Button>
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Ya, Logout
          </Button>
        </div>
      </Modal>
    </>
  );
}
