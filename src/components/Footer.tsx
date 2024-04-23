'use client';

import React from 'react';
import SocialNetworks from './ui/Social';

const Footer = () => {
  return (
    <footer className='pt-10 h-[10em] border border-[red] flex flex-col items-center justify-between'>
      <h1>TITLE FOOTER</h1>
      <SocialNetworks />
      <div className=''>
        <p>sebastian perez © 2023 | Echo con ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
