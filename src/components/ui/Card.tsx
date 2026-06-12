import type { HTMLAttributes } from 'react';
import s from './Card.module.scss';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className, ...rest }: Props) {
  return (
    <div className={`${s.card}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </div>
  );
}
