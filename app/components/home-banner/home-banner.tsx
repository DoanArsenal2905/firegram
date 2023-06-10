import { SearchIcon } from '@app/assets/icons';
import { Input } from '../input/input';
import { NextImage } from '../next-image/image';
import { Tag } from '../tag/tag';

export const HomeBanner = () => {
  return (
    <section className='w-full h-[600px] relative text-base'>
      <div className='w-full h-full'>
        <NextImage className='brightness-95' src='/images/banner.jpg' alt='' />
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center gap-12 text-white px-16 py-20'>
        <div className='flex gap-5'>
          <Tag content='Natures' />
          <Tag content='Games' />
          <Tag content='Illustration' />
          <Tag content='Girls' />
          <Tag content='Abstracts' />
        </div>

        <div className='flex flex-col justify-center items-center gap-10 max-w-[600px]'>
          <div className='text-4xl font-bold leading-6'>
            Explore the world’s photos
          </div>
          <div className='text-center'>
            The best free stock photos, royalty free images & videos shared by
            creators.
          </div>
        </div>

        <div className='max-w-[600px] w-full'>
          <Input
            className='text-sm'
            name='search'
            icon={<SearchIcon className='text-[#807F8B]' />}
            appearance='circle'
            size='lg'
            placeholder='Search...'
          />
        </div>

        <div className='flex items-center gap-3'>
          <div className='text-xs'>Trending:</div>
          <div className='flex gap-2'>
            <Tag content='summer' type='light' size='md' />
            <Tag content='moutain' type='light' size='md' />
            <Tag content='flower' type='light' size='md' />
          </div>
        </div>
      </div>
    </section>
  );
};
