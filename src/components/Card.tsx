'use client';

import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { PiHeartLight } from 'react-icons/pi';
import { PiHeartFill } from 'react-icons/pi';
import { useState } from 'react';
import { Button } from 'antd';
import { HiPlusSm } from 'react-icons/hi';
import { productsToPreLoad } from '@/helpers/products.mock';

const Card = () => {
  const [favorite, setFavorite] = useState<boolean>(true);

  return (
    <>
      {productsToPreLoad.map((item) => (
        <div
          key={item.id}
          className='m-8 flex flex-col items-center rounded-lg justify-between relative overflow-hidden w-[17em] border [box-shadow:2px_18px_42px_-22px_rgba(0,0,0,0.42)]'>
          {item.discount && (
            <span className='left-4 bg-red-600 rounded-[0_0_1em_1em] px-2 py-4 absolute text-slate-50 font-bold'>
              {item.discount}%
            </span>
          )}
          <button
            className='scale-125 absolute right-2 top-3 text-3xl -translate-x-3 translate-y-2 rounded-full p-2 bg-white/5 [backdrop-filter:blur(2px)] hover:bg-black/5 hover:duration-300'
            onClick={() => setFavorite(!favorite)}>
            {favorite ? (
              <PiHeartLight className='text-slate-900/50 hover:text-red-500' />
            ) : (
              <PiHeartFill className='text-[#f00]' />
            )}
          </button>

          <div className='h-full w-full p-[2.5em_2.5em_1em_2.5em]'>
            <Image
              src={item.imgURL}
              alt={item.name}
              width={400}
              height={400}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          <div className='pl-5 pb-8 pt-5 relative flex flex-col gap-1 bg-[#efefef] w-full'>
            <span className='text-lg font-semibold'>{item.name}</span>
            <div className='flex gap-2 items-center font-semibold'>
              <span className='text-2xl'>${item.price}</span>
              {item.old_price && (
                <span className='[text-decoration:line-through] text-slate-400 text-lg'>
                  $ 32.0000
                </span>
              )}
            </div>
            <span className='text-gray-500'>{item.category}</span>
            {item.express && (
              <span className='text-red-500'>{item.express}</span>
            )}

            <Button
              className='shadow-[3px_5px_10px_#0003] flex items-center scale-125 absolute right-5 bottom-5'
              type='primary'>
              <HiPlusSm />
              <FaShoppingCart />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
