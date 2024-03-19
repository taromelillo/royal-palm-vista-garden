import { slider } from '@/assets';
import { Calendar, Checkout } from '@/components';

export default function Book() {
  return (
    <div className='max-w-[1200px] m-auto my-8'>
      <section className='h-[20rem] block'>
        <img
          src={
            'https://res.cloudinary.com/didni0nof/image/upload/v1703897829/samples/rpvg-assets/rpvg6_s9pr7o.jpg'
          }
          className='max-w-[1200px] object-cover xs:object-top object-center absolute top-0 bottom-0 xs:aspect-[4/3] md:aspect-[4/3]'
          style={{
            width: '100%',
            height: '30rem',
            WebkitMaskImage: 'linear-gradient(rgb(0 0 0 / 1), transparent)',
            maskImage: 'linear-gradient(rgb(0 0 0 / 1), transparent)',
          }}
          alt=''
        />
      </section>
      <section className='flex flex-col-reverse w-full md:flex-row justify-center items-center md:justify-evenly xs:gap-8 md:gap-[none] my-4'>
        <Calendar />
        <Checkout />
      </section>
    </div>
  );
}
