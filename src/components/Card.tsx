'use client';

import card_img from '@/assets/z.jpg';
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
          className='m-8 flex flex-col items-center rounded-lg justify-between relative overflow-hidden w-[25em]'>
          {item.discount && (
            <span className='left-4 bg-red-600 rounded-[0_0_1em_1em] p-3 absolute text-slate-50'>
              {item.discount}%
            </span>
          )}
          <button
            className='absolute right-2 top-2 text-3xl -translate-x-3 translate-y-2'
            onClick={() => setFavorite(!favorite)}>
            {favorite ? (
              <PiHeartLight className='text-slate-900/50' />
            ) : (
              <PiHeartFill className='text-[#f00]' />
            )}
          </button>

          <div className='h-full w-full'>
            <Image
              // src={card_img}
              src={item.imgURL}
              width={300}
              height={300}
              // src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*'
              alt='card-image'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>

          <div className='pl-5 relative flex flex-col gap-1 bg-[#ffffff] w-full'>
            <span className='text-2xl font-semibold'>{item.name}</span>
            <div className='flex gap-2 items-center font-semibold'>
              <span className='text-3xl'>${item.price}</span>
              {item.old_price && (
                <span className='[text-decoration:line-through] text-slate-400 text-xl'>
                  $ 32.0000
                </span>
              )}
            </div>
            <span className='text-gray-500'>{item.category}</span>
            {item.express && (
              <span className='text-red-500'>{item.express}</span>
            )}

            <Button
              className='shadow-[3px_5px_10px_#0003] flex items-center scale-125  absolute right-14 top-[30%]'
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
