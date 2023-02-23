import classes from './Button.module.css';
import { Label } from '../../typography';
interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={classes.button} onClick={onClick}>
      <Label white>{text.toUpperCase()}</Label>
    </button>
  );
}
