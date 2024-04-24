'use client';

import React from 'react';
import SocialNetworks from './ui/Social';
import { GoHeartFill } from 'react-icons/go';

const Footer = () => {
  return (
    <footer className='pt-10 h-[10em] border border-[red] flex flex-col items-center justify-between'>
      <h1>TITLE FOOTER</h1>
      <SocialNetworks />
      <div className='flex items-center gap-1'>
        sebastian perez © 2023 | echo con{' '}
        <span>
          <GoHeartFill />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
