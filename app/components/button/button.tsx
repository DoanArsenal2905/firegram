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
        'h-10 w-full font-semibold px-6 transition-colors duration-200 ease-in-out',
        {
          'rounded-full': appearance === 'circle',
          'rounded-lg': appearance === 'rectangle',
          'bg-pink text-white hover:opacity-90': background === 'primary',
          'bg-dark hover:opacity-80 transition ease-in-out duration-300 text-white':
            background === 'secondary',
          'bg-input hover:bg-[#e7e7e9] text-primary': background === 'tertiary',
        }
      )}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
