import { Info, Map } from '@/components';

export default function Faq() {
  return (
    <div className='w-full max-w-6xl mx-auto min-h-screen py-20 px-2'>
      <div className='flex justify-center sm:justify-start'>
        <h1 className='text-3xl font-bold uppercase tracking-widest'>
          Information
        </h1>
      </div>
      <div className='w-full h-px bg-accent my-8' />
      <Info />
      <Map />
    </div>
  );
}
