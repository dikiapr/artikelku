import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={s.header}>
          <h2 className={s.title}>{title}</h2>
          <button className={s.closeBtn} onClick={onClose} aria-label="Tutup">✕</button>
        </div>
        <div className={s.body}>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
