import { BaseButton } from '../BaseButton';
import { Caption } from '../../../typography';

interface TextButtonProps {
  text: string;
  onClick: () => void;
}

export function TextButton({ text, onClick }: TextButtonProps) {
  return (
    <BaseButton onClick={onClick}>
      <Caption white>{text}</Caption>
    </BaseButton>
  );
}
