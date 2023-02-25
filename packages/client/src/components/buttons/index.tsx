import {
  CgSleep,
  MdRestartAlt,
  RiShutDownLine,
  TiCancelOutline,
} from 'react-icons/all';
import { IconButton } from './IconButton';
import { TextButton } from './TextButton';

export function makeActionButton({
  type,
  onClick,
}: {
  type: 'shutdown' | 'restart' | 'hibernate' | 'abort';
  onClick: () => void;
}) {
  const DEFAULT_ICON_SIZE = 24;

  switch (type) {
    case 'shutdown':
      return (
        <IconButton
          text="SHUTDOWN"
          icon={<RiShutDownLine size={DEFAULT_ICON_SIZE} color="white" />}
          onClick={onClick}
        />
      );
    case 'restart':
      return (
        <IconButton
          text="RESTART"
          icon={<MdRestartAlt size={DEFAULT_ICON_SIZE} color="white" />}
          onClick={onClick}
        />
      );
    case 'hibernate':
      return (
        <IconButton
          text="HIBERNATE"
          icon={<CgSleep size={DEFAULT_ICON_SIZE} color="white" />}
          onClick={onClick}
        />
      );
    case 'abort':
      return (
        <IconButton
          text="ABORT"
          icon={<TiCancelOutline size={DEFAULT_ICON_SIZE} color="white" />}
          onClick={onClick}
        />
      );
  }
}

export function makeScheduleButton({ onClick }: { onClick: () => void }) {
  return <TextButton text="SCHEDULE" onClick={onClick} />;
}
