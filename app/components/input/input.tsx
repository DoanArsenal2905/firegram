import { ReactNode } from 'react';
import clsx from 'clsx';

type InputProps = {
  className?: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  label?: string;
  subLabel?: string;
  appearance?: 'circle' | 'rectangle';
  icon?: ReactNode;
  size?: 'md' | 'lg';
};

export const Input = ({
  className,
  name,
  disabled,
  readOnly,
  placeholder,
  type = 'text',
  label,
  subLabel,
  appearance = 'rectangle',
  icon,
  size = 'md',
}: InputProps) => {
  return (
    <div className='relative'>
      <label htmlFor={name} className='flex justify-between'>
        <div className='font-bold'>{label}</div>
        {type === 'password' && (
          <div className='cursor-pointer text-pink hover:underline'>
            {subLabel}
          </div>
        )}
      </label>
      <input
        className={clsx(
          className,
          'transition-all duration-200 ease-in-out w-full px-4 py-[10px] bg-input outline-none text-primary mt-1 hover:bg-white hover:border hover:border-pink focus:shadow-pink focus:bg-white focus:border focus:border-pink',
          {
            'rounded-lg': appearance === 'rectangle',
            'rounded-full': appearance === 'circle',
            'h-10': size === 'md',
            'h-14': size === 'lg',
            'px-12': icon,
          }
        )}
        id={name}
        type={type}
        name={name}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
      />
      {icon && (
        <div className={clsx('absolute left-5', { 'top-6': size === 'lg' })}>
          {icon}
        </div>
      )}
    </div>
  );
};
