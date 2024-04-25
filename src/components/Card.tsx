'use client';

import card_img from '@/assets/z.jpg';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { Button } from 'antd';

const Card = () => {
  const [state, setState] = useState(true);

  return (
    <div className='border border-[black] w-[23em] m-8 flex flex-col items-center rounded-lg justify-between relative overflow-hidden'>
      <button
        className='absolute right-2 top-2 text-4xl -translate-x-3 translate-y-2'
        onClick={() => setState(!state)}>
        {state ? <FaRegHeart /> : <FaHeart className='text-[#f00]' />}
      </button>

      <div className='h-auto w-[25em] px-8 pt-4'>
        <Image
          src={card_img}
          alt='card-image'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <div className='pb-6 bg-[#ffffff] px-4 flex flex-col items-center w-full'>
        <div className='flex flex-col items-center h-[12em] justify-center gap-3'>
          <span className='text-4xl font-bold'>Zapatilas Pepito</span>
          <p className='flex items-center gap-2'>
            <span className='[text-decoration:line-through]'>$ 32.0000</span>
            <span className='bg-green-600 py-2 px-4 rounded-lg text-slate-50'>
              20% OFF
            </span>
          </p>
          <div className='flex gap-5 items-center'>
            <span className='font-bold text-3xl'>$ 30.200</span>
            <Button
              className='flex h-10 gap-2 items-center p-5 justify-center rounded-lg'
              type='primary'>
              <FaPlus />
              <FaShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
