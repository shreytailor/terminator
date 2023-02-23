import { Caption } from '../../../typography';
import classes from './NumberField.module.css';

interface NumberFieldProps {
  id: string;
  label: string;
  onChange: (value: string) => void;
  defaultValue?: number;
}

export function NumberField({
  id,
  label,
  onChange,
  defaultValue = 0,
}: NumberFieldProps) {
  return (
    <div className={classes.fieldContainer}>
      <label htmlFor={id}>
        <Caption>{label}</Caption>
      </label>
      <input
        id={id}
        type="number"
        onChange={(event) => {
          onChange(event.target.value);
        }}
        defaultValue={defaultValue}
      />
    </div>
  );
}
