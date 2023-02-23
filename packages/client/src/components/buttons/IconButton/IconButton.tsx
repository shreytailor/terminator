import { ReactNode } from 'react';
import { BaseButton } from '../BaseButton';
import { Caption } from '../../../typography';
import classes from './IconButton.module.css';

interface IconButtonProps {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}

export function IconButton({ icon, text, onClick }: IconButtonProps) {
  return (
    <BaseButton onClick={onClick}>
      <div className={classes.iconTextWrapper}>
        {icon}
        <Caption white>{text}</Caption>
      </div>
    </BaseButton>
  );
}
