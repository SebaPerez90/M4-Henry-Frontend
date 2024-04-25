'use client';

import React from 'react';
import SocialNetworks from './ui/Social';
import { GoHeartFill } from 'react-icons/go';
import icon from '@/assets/icon.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='h-[25em] bg-[#292929] flex flex-col items-center justify-center gap-6 text-slate-50 relative'>
      <div className='flex items-center gap-1'>
        <Image
          src={icon}
          alt='icon-img'
          width={30}
          height={30}
        />
        <span className='text-2xl italic'>
          <strong className='text-3xl text-blue-500'>G</strong>reen
          <strong className='text-3xl text-blue-500'>L</strong>ife
        </span>
      </div>
      <SocialNetworks />
      <div className='flex items-center gap-1 absolute bottom-2'>
        sebastian perez © 2023 | echo con{' '}
        <span>
          <GoHeartFill />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
