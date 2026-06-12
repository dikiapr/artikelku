import type { ButtonHTMLAttributes } from 'react';
import s from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md';
  loading?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  disabled,
  className,
  ...rest
}: Props) {
  return (
    <button
      className={`${s.btn} ${s[variant]} ${s[size]}${className ? ` ${className}` : ''}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? 'Memproses...' : children}
    </button>
  );
}
