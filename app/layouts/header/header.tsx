import Link from 'next/link';

import { Button } from '@app/components';
import { LogoIcon } from '@app/assets/icons';

import './header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container mx-auto h-[100px] flex justify-between items-center'>
        <Link
          href='/'
          className='flex justify-center items-center gap-3 hover:opacity-70 cursor-pointer text-[28px] h-full'
        >
          <LogoIcon />
          Firegram
        </Link>
        <div className='flex justify-end items-center gap-5'>
          <Link href='/auth/login' className='font-semibold'>
            Log in
          </Link>
          <div className='h-1 w-1 bg-dark rounded-full' />
          <Link href='/auth/register'>
            <Button label='Register' background='secondary' />
          </Link>
        </div>
      </div>
    </header>
  );
};
