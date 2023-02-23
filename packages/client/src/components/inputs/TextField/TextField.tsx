import classes from './TextField.module.css';
import { Caption } from '../../../typography';

interface TextFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function TextField({
  id,
  label,
  placeholder,
  onChange,
}: TextFieldProps) {
  return (
    <div className={classes.fieldContainer}>
      <label htmlFor={id}>
        <Caption>{label}</Caption>
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}