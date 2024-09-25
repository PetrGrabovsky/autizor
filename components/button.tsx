import clsx from 'clsx';
import { IconType } from 'react-icons';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary';
  size?: 'normal';
  disabled?: boolean;
  Icon?: IconType;
}

export default function Button({
  text,
  onClick,
  variant = 'primary',
  size = 'normal',
  disabled = false,
  Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        variant === 'primary' && 'bg-brandAccent',
        size === 'normal' && 'h-8 w-32 text-base',
        disabled && 'cursor-not-allowed opacity-30',
        !disabled && 'hover:brightness-125',
        'smoothTransition flex items-center justify-center rounded-md text-textPrimary focus:outline-none'
      )}
    >
      {Icon && <Icon className="mr-2" />}
      {text}
    </button>
  );
}
