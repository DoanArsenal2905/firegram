import Link from 'next/link';

import { LogoIcon } from '@app/assets/icons';
import { NextImage } from '@app/components/next-image/image';

export function Login() {
  return (
    <section className='flex'>
      <div className='flex flex-col justify-between w-[514px] h-screen bg-[#F2D183] '>
        <header className='p-16 text-[#866118]'>
          <Link
            href='/'
            className='flex items-center gap-3 opacity-70 hover:opacity-100 cursor-pointer mb-7'
          >
            <LogoIcon />
            <div className='text-[28px]'>Firegram</div>
          </Link>
          <div className='text-[32px] font-bold'>
            Where to store your memorable photos and discover beautiful photos
            all over the world.
          </div>
        </header>
        <div className='w-full h-full'>
          <NextImage src='/images/login-logo.png' alt='' />
        </div>
      </div>
      <div className='w-[calc(100%-514px)]'>
        <div className='flex items-center justify-end gap-2 p-8'>
          <div>Not a member?</div>
          <Link
            href='/auth/register'
            className='text-[#ff6584] hover:underline cursor-pointer'
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
}
