import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import classes from './ActionButton.module.css';
import {
  CgSleep,
  MdRestartAlt,
  RiShutDownLine,
  TiCancelOutline,
} from 'react-icons/all';
import { Label } from '../../typography';

interface ActionButtonProps {
  text: string;
  icon: ReactElement<IconType>;
  onClick?: () => void;
}

function ActionButton({ text, icon, onClick }: ActionButtonProps) {
  return (
    <button className={classes.actionButton} onClick={onClick}>
      {icon}
      <Label white>{text}</Label>
    </button>
  );
}

interface ActionButtonParams {
  type: 'shutdown' | 'restart' | 'hibernate' | 'abort';
  onClick?: () => void;
}
export function makeActionButton({
  type,
  onClick,
}: ActionButtonParams): ReactElement {
  const DEFAULT_ICON_SIZE = 24;

  switch (type) {
    case 'shutdown':
      return (
        <ActionButton
          text="SHUTDOWN"
          icon={<RiShutDownLine size={DEFAULT_ICON_SIZE} />}
          onClick={onClick}
        />
      );
    case 'restart':
      return (
        <ActionButton
          text="RESTART"
          icon={<MdRestartAlt size={DEFAULT_ICON_SIZE} />}
          onClick={onClick}
        />
      );
    case 'hibernate':
      return (
        <ActionButton
          text="HIBERNATE"
          icon={<CgSleep size={DEFAULT_ICON_SIZE} />}
          onClick={onClick}
        />
      );
    case 'abort':
      return (
        <ActionButton
          text="ABORT"
          icon={<TiCancelOutline size={DEFAULT_ICON_SIZE} />}
          onClick={onClick}
        />
      );
  }
}
