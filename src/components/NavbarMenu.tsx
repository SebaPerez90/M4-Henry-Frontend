'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/assets/avatar.png';
import { useEffect, useState } from 'react';

const NavbarMenu = () => {
  const [isLoged, setIsLoged] = useState<boolean>(true);
  return (
    <nav className='w-full border-[red] border p-6 flex items-center justify-between'>
      <p>ICON</p>
      <div className='gap-5 relative left-10 flex flex-col justify-center items-center'>
        <ul className='flex justify-center border border-[blue] w-max gap-5 '>
          <li className='border p-3 rounded-lg cursor-pointer'>
            <Link href={'/'}>home</Link>
          </li>
          <li className='border p-3 rounded-lg cursor-pointer'>
            <Link href={'/products'}>productos</Link>
          </li>
          <li className='border p-3 rounded-lg cursor-pointer'>
            <Link href={'/highlighted'}>destacados</Link>
          </li>
        </ul>
        <label
          className='flex'
          htmlFor='search-bar'>
          <input
            type='text'
            name='search-bar'
            id='search-bar'
            className='border'
          />
          <IoSearchSharp className='border h-full w-6 p-1' />
        </label>
      </div>
      {isLoged ? (
        <div className='flex gap-6 items-center border '>
          <button>
            <FaHeart />
          </button>
          <button>
            <FaShoppingCart />
          </button>
          <button>
            <Image
              alt='avatar'
              src={avatar}
              width={30}
              height={30}
            />
          </button>
        </div>
      ) : (
        <div className='flex gap-3'>
          <button>Ingresa</button>
          <button>Registrate</button>
        </div>
      )}
    </nav>
  );
};

export default NavbarMenu;
