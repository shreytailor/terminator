import { ActionPageTemplate } from '../components/layouts/ActionPageTemplate';
import {
  makeDelayNumberField,
  makeForceCloseCheckBox,
} from '../components/inputs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleShutdown } from '../utilities/handlers';

export function Shutdown() {
  const navigate = useNavigate();
  const [delay, setDelay] = useState('0');
  const [forceClose, setForceClose] = useState(false);

  return (
    <ActionPageTemplate
      pageTitle="Shutdown Options"
      onSubmit={async () => {
        if (await handleShutdown({ delay, forceClose })) navigate(-1);
      }}
    >
      {makeDelayNumberField({
        onChange: (value) => {
          setDelay(value);
        },
      })}
      {makeForceCloseCheckBox({
        onToggle: (value) => {
          setForceClose(value);
        },
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
