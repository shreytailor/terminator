import { TextField } from './TextField';
import { CheckBox } from './CheckBox';

export function makeDelayTextField({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  return (
    <TextField
      id="delay-input"
      label="DELAY (IN MINUTES)"
      onChange={onChange}
    />
  );
}

export function makeForceCloseCheckBox({
  onToggle,
}: {
  onToggle: (value: boolean) => void;
}) {
  return (
    <CheckBox
      id="forceclose-input"
      label="FORCE CLOSE ALL APPLICATIONS?"
      onToggle={onToggle}
    />
  );
}
