type DividerProps = {
  content?: string;
};

export const Divider = ({ content }: DividerProps) => {
  return (
    <div className='w-full h-[1px] bg-divider my-4 relative z-0 flex items-center justify-center'>
      {content && (
        <div className='absolute -top-3 bg-white px-4 z-10 text-divider'>
          {content}
        </div>
      )}
    </div>
  );
};
