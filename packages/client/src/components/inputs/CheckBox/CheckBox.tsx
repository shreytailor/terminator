import classes from './CheckBox.module.css';
import { Caption } from '../../../typography';

interface CheckBoxProps {
  id: string;
  label: string;
  onToggle: (value: boolean) => void;
  defaultChecked?: boolean;
}

export function CheckBox({
  id,
  label,
  onToggle,
  defaultChecked = false,
}: CheckBoxProps) {
  return (
    <div className={classes.checkBoxContainer}>
      <input
        id={id}
        type="checkbox"
        onChange={(event) => {
          onToggle(event.target.checked);
        }}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>
        <Caption>{label.toUpperCase()}</Caption>
      </label>
    </div>
  );
}
