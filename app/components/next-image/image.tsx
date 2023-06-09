import Image from 'next/image';
import clsx from 'clsx';

type NextImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
};

export const NextImage = ({
  src,
  alt,
  quality = 75,
  className,
  height,
  width,
}: NextImageProps) => {
  return (
    <div className='relative w-full h-full'>
      <Image
        className={clsx(className, 'object-cover')}
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes='(max-width: 1200px) 100vw, (max-width: 1024px) 75vw, (max-width: 768px) 50vw'
        loading='lazy'
        fill
      />
    </div>
  );
};
