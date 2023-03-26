import { TextButton } from './TextButton';
import { IconButton } from './IconButton';
import { MdRestartAlt, RiShutDownLine, TiCancelOutline } from 'react-icons/all';

export function makeActionButton({
  type,
  onClick,
}: {
  type: 'shutdown' | 'restart' | 'abort';
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
