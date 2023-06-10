import clsx from 'clsx';

type TagProps = {
  content: string;
  handleClick?: () => void;
  type?: 'dark' | 'light';
  size?: 'md' | 'lg';
};

export const Tag = ({
  content,
  handleClick,
  type = 'dark',
  size = 'lg',
}: TagProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-200 cursor-pointer',
        {
          'bg-[#00000080]': type === 'dark',
          'bg-transparent border border-white': type === 'light',
          'px-6 py-4': size === 'lg',
          'px-4 py-1 text-xs': size === 'md',
        }
      )}
      onClick={handleClick}
    >
      {content}
    </div>
  );
};
