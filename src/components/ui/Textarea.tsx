import type { TextareaHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({ label, error, id, ...rest }: Props) {
  const inputId = id ?? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={inputId}>{label}</label>
      <textarea
        className={`${s.textarea}${error ? ` ${s.hasError}` : ''}`}
        id={inputId}
        {...rest}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
}
