import { Label } from '../../typography';
import classes from './CheckBox.module.css';

interface CheckBoxProps {
  id: string;
  label: string;
  onToggle: (value: boolean) => void;
}

export function CheckBox({ id, label, onToggle }: CheckBoxProps) {
  return (
    <div className={classes.checkBoxContainer}>
      <input
        id={id}
        type="checkbox"
        onChange={(event) => {
          onToggle(event.target.checked);
        }}
      />
      <label htmlFor={id}>
        <Label>{label.toUpperCase()}</Label>
      </label>
    </div>
  );
}
