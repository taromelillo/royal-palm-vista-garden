"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { slider } from "@/assets";
// import {
//   IoChevronBack,
//   IoChevronForward,
//   IoEllipseOutline,
// } from "react-icons/io5";
// import clsx from "clsx";

export function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === 0) return slider.length - 1;
      return imageIndex - 1;
    });
  };

  const nextImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === slider.length - 1) return 0;
      return imageIndex + 1;
    });
  };

  return (
    <div className=" w-full h-[500px] lg:h-[550px]  relative">
      {/* Images */}

      <Swiper
        className="w-full h-full mySwiper"
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {slider.map((url, i) => {
          return (
            <SwiperSlide
              className="w-full h-full flex flex-row cursor-grab text-center justify-center items-center"
              key={i}
            >
              <img
                className="w-full h-full object-cover block transition-all duration-300 ease-in-out"
                src={url}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="w-full h-full flex overflow-hidden cursor-grab">
        {slider.map((url, i) => {
          return (
            <img
              key={i}
              src={url}
              className="w-full h-full object-cover shrink-0 grow-0 block transition-all duration-300 ease-in-out"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}
      </div> */}

      {/* Buttons */}
      {/* <button
        onClick={prevImage}
        className="absolute top-0 bottom-0 p-[1rem] unset pointer text-white font-bold left-0 hover:bg-black-rgba transition-all duration-300 ease-in-out"
      >
        <IoChevronBack size={43} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-0 bottom-0 p-[1rem] unset pointer text-white font-bold right-0 hover:bg-black-rgba transition-all duration-300 ease-in-out"
      >
        <IoChevronForward size={43} />
      </button> */}

      {/* Controls */}
      {/* <div className="absolute bottom-4 left-1/2 translate-x-center flex gap-2">
        {slider.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              className={clsx("w-4 h-4 rounded-xl bg-black outline-none", {
                "bg-main": index === imageIndex,
              })}
            >
              <IoEllipseOutline
                className={clsx("w-full h-full fill-accent", {
                  "fill-accent": index === imageIndex,
                })}
              />
            </button>
          );
        })}
      </div> */}
    </div>
  );
}
