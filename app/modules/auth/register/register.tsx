import Head from 'next/head';
import Link from 'next/link';

import { LogoIcon } from '@app/assets/icons';
import { Button, Input, NextImage } from '@app/components';
import { Divider } from '@app/components/divider/divider';

export const Register = () => {
  return (
    <section className='flex'>
      <Head>
        <title>Register | Firegram</title>
        <meta name='description' content='Login Page' />
      </Head>
      <div className='flex flex-col justify-between w-[514px] h-screen bg-[#F1CDD7] '>
        <header className='p-16 text-[#865c6c]'>
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
          <NextImage src='/images/register-logo.jpg' alt='' />
        </div>
      </div>

      <div className='w-[calc(100%-514px)] h-screen flex flex-col flex-1'>
        <div className='flex items-center justify-end gap-2 p-8'>
          <div>Not a member?</div>
          <Link
            href='/auth/login'
            className='text-pink hover:underline cursor-pointer'
          >
            Login Now
          </Link>
        </div>

        <div className='flex justify-center items-center h-full'>
          <div className='w-full max-w-[416px]'>
            <div className=''>
              <div className='font-bold text-3xl mb-8 text-center'>
                Register to Firegram
              </div>
            </div>

            <Divider />

            <div className='mt-8'>
              <div className='flex flex-col gap-6 mb-8'>
                <div className='grid grid-cols-2 gap-5 w-full'>
                  <div>
                    <Input name='name' label='Name' />
                  </div>
                  <div>
                    <Input name='username' label='Username' />
                  </div>
                </div>
                <div>
                  <Input name='email' label='Email Address' />
                </div>
                <div>
                  <Input
                    name='password'
                    label='Password'
                    type='password'
                    placeholder='6+ Characters'
                  />
                </div>
              </div>
              <Button type='submit' label='Create Account' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
