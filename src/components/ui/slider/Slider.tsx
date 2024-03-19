'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject } from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { slider } from '@/assets';

export function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className=' w-full h-[500px] lg:h-[650px]  relative'>
      {/* Images */}

      <Swiper
        className='w-full h-full mySwiper'
        autoplay={{ delay: 3000, waitForTransition: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={true}
        navigation={true}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
      >
        {slider.map((url, i) => {
          return (
            <SwiperSlide
              className='w-full h-full flex flex-row cursor-grab text-center justify-center items-center'
              key={i}
            >
              <img
                className='w-full h-full block transition-all duration-300 ease-in-out'
                src={url}
                alt=''
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
