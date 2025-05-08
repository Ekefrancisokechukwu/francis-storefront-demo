"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Wrapper } from "../ui/Wrapper";

const sliderItems = [
  {
    image: "/main-banner-1.webp",
    heading: " Choose from estre's long sofa sets",
    subTitle: "Flat 20% Off All Items",
    para: " Lorem ipsum dolor sit amet consectetur adipiscing elit sed incididunt labore et dolore magna aliqua.",
  },
  {
    image: "/main-banner-2.webp",
    heading: "Bench suitable for living room",
    subTitle: "Flat 20% Off All Items",
    para: " Lorem ipsum dolor sit amet consectetur adipiscing elit sed incididunt labore et dolore magna aliqua.",
  },
];

const HeroSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Wrapper className=" group   relative  rounded-lg ">
      <Swiper
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="!ease-smush"
      >
        {sliderItems.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="relative z-10  rounded-lg sm:py-[5rem] py-[2rem] sm:px-[2rem] px-[1rem]">
                <div className="w-full absolute inset-0 -z-10 overflow-hidden rounded-lg">
                  <Image
                    alt={slide.image}
                    src={slide.image}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex items-center">
                  <div className="w-[30rem]">
                    <p className="font-medium">{slide.subTitle}</p>
                    <h1 className="sm:text-4xl text-3xl font-semibold mt-6">
                      {slide.heading}
                    </h1>
                    <p className="mt-4">{slide.para}</p>
                    <Button asChild className="px-6 h-11.5 mt-7">
                      <Link href={"#"}>SHOP NOW</Link>
                    </Button>
                  </div>
                  <div></div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute size-[3.5rem] z-10 hover:bg-neutral-800 hover:text-white transition-all duration-300 rounded-full grid place-items-center bg-white shadow top-1/2 -translate-y-1/2 left-3 opacity-0 group-hover:opacity-100"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute size-[3.5rem] z-10 hover:bg-neutral-800 hover:text-white transition-all duration-300 rounded-full grid place-items-center bg-white shadow top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100"
      >
        <ArrowRight />
      </button>
    </Wrapper>
  );
};

export default HeroSection;
