import clsx from 'clsx';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  appearance?: 'circle' | 'rectangle';
  type?: 'submit' | 'button';
  background?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

export function Button({
  label,
  disabled,
  type = 'button',
  appearance = 'rectangle',
  background = 'primary',
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        'h-10 font-medium px-6 transition-colors duration-200 ease-in-out',
        {
          'rounded-full': appearance === 'circle',
          'rounded-lg': appearance === 'rectangle',
          'bg-[#ff6584] text-white hover:opacity-90': background === 'primary',
          'bg-[#EA8FA0] hover:opacity-80 transition ease-in-out duration-300 text-white':
            background === 'secondary',
          'bg-white hover:bg-[#e6e6e6] text-[#175FEF]':
            background === 'tertiary',
        }
      )}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
