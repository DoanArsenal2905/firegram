import Head from 'next/head';
import Link from 'next/link';

import { LogoIcon } from '@app/assets/icons';
import { NextImage } from '@app/components/next-image/image';
import { Button, Input } from '@app/components';
import { Divider } from '@app/components/divider/divider';

export function Login() {
  return (
    <section className='flex'>
      <Head>
        <title>Login | Firegram</title>
        <meta name='description' content='Login Page' />
      </Head>
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

      <div className='w-[calc(100%-514px)] h-screen flex flex-col flex-1'>
        <div className='flex items-center justify-end gap-2 p-8'>
          <div>Not a member?</div>
          <Link
            href='/auth/register'
            className='text-pink hover:underline cursor-pointer'
          >
            Register Now
          </Link>
        </div>

        <div className='flex justify-center items-center h-full'>
          <div className='w-full max-w-[416px]'>
            <div className=''>
              <div className='font-bold text-3xl mb-8 text-center'>
                Login to Firegram
              </div>
            </div>

            <Divider content='Or' />

            <div className='mt-8'>
              <div className='mb-8'>
                <Input name='username' label='Username or Email Address' />
                <div className='mt-4'>
                  <Input
                    name='password'
                    label='Password'
                    subLabel='Forgot Password'
                    type='password'
                  />
                </div>
              </div>
              <Button type='submit' label='Login' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
