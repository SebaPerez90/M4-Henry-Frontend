import { Button } from 'antd';
import Card from './Card';

const CardsContainer = () => {
  return (
    <section className='my-24 flex items-center flex-col gap-16'>
      <h1 className='text-5xl font-bold'>Maxima Calidad</h1>
      <div className='flex justify-between'>
        <Button
          type='primary'
          size='large'
          className='mr-2'>
          Comprar Ahora
        </Button>
        <Button
          type='primary'
          size='large'
          className='ml-2'>
          Sumate a la Experiencia
        </Button>
      </div>
      <div className='flex w-full flex-wrap gap-8 bg-[#ffffff] justify-center'>
        <Card />
      </div>
    </section>
  );
};

export default CardsContainer;
