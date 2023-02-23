import { ActionPageTemplate } from '../components/layouts/ActionPageTemplate';
import {
  makeDelayNumberField,
  makeForceCloseCheckBox,
} from '../components/inputs';

export function Shutdown() {
  return (
    <ActionPageTemplate pageTitle="Shutdown Options" onSubmit={() => {}}>
      {makeDelayNumberField({
        onChange: () => {},
      })}
      {makeForceCloseCheckBox({
        onToggle: () => {},
      })}
    </ActionPageTemplate>
  );
}

export function Restart() {
  return (
    <ActionPageTemplate pageTitle="Restart Options" onSubmit={() => {}}>
      {makeDelayNumberField({
        onChange: () => {},
      })}
      {makeForceCloseCheckBox({
        onToggle: () => {},
      })}
    </ActionPageTemplate>
  );
}

export function Hibernate() {
  return (
    <ActionPageTemplate pageTitle="Hibernate Options" onSubmit={() => {}}>
      {makeDelayNumberField({
        onChange: () => {},
      })}
    </ActionPageTemplate>
  );
}
