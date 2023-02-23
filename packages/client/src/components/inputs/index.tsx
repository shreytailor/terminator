import { NumberField } from './NumberField';
import { CheckBox } from './CheckBox';

export function makeDelayNumberField({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  return (
    <NumberField
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
