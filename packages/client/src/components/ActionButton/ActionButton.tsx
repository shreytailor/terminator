import {
  CgSleep,
  MdRestartAlt,
  RiShutDownLine,
  TiCancelOutline,
} from 'react-icons/all';
import classes from './ActionButton.module.css';

interface ActionButtonProps {
  variant: 'shutdown' | 'restart' | 'hibernate' | 'abort';
  onClick?: () => void;
}

export function ActionButton({ variant, onClick }: ActionButtonProps) {
  const DEFAULT_ICON_SIZE = 24;

  const icon =
    variant === 'shutdown' ? (
      <RiShutDownLine size={DEFAULT_ICON_SIZE} />
    ) : variant === 'restart' ? (
      <MdRestartAlt size={DEFAULT_ICON_SIZE} />
    ) : variant === 'hibernate' ? (
      <CgSleep size={DEFAULT_ICON_SIZE} />
    ) : (
      <TiCancelOutline size={DEFAULT_ICON_SIZE} />
    );

  return (
    <button className={classes.actionButton} onClick={onClick}>
      {icon}
      <p>{variant.toUpperCase()}</p>
    </button>
  );
}
