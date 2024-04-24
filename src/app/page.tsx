import Image from 'next/image';
import hero_img from '@/assets/hero-bg.jpg';
import Card from '@/components/Card';

const Home = () => {
  return (
    <>
      <div className='relative h-[40em] w-full flex justify-center flex-col pepe after:absolute after:w-full after:h-[40em] after:bg-[#000000d4] after:-z-10 z-10'>
        <Image
          className='absolute top-0 z-10 h-[40em] w-full object-cover opacity-45'
          src={hero_img}
          alt='background img'
        />
        <header className='z-20 gap-3 flex justify-center items-center flex-col'>
          <h1 className='text-slate-50 z-20 text-9xl'>Hero Section</h1>
          <p className='text-slate-200 px-12 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            ex quasi maiores deserunt culpa exercitationem provident atque ut,
            facilis nobis aliquid fuga recusandae nulla dolores laudantium! Sit
            eius vitae officiis?
          </p>
          <button className='p-4 rounded-xl bg-slate-50 font-semibold'>
            submit btn
          </button>
        </header>
      </div>
      <Card />
    </>
  );
};

export default Home;
