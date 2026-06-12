import type { InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, id, ...rest }: Props) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={inputId}>{label}</label>
      <input
        className={`${s.input}${error ? ` ${s.hasError}` : ''}`}
        id={inputId}
        {...rest}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
}
