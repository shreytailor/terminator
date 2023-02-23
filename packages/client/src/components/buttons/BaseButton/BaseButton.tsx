import { ReactNode } from 'react';
import classes from './BaseButton.module.css';

interface BaseButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export function BaseButton({ children, onClick }: BaseButtonProps) {
  return (
    <button className={classes.baseButton} onClick={onClick}>
      {children}
    </button>
  );
}
