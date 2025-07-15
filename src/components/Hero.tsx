"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const Hero = () => {
  return (
    <div className="w-full max-w-full mx-auto my-7">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="my-7 w-full h-[50%]">
            {/* <!-- 2. Hero Banner Section --> */}
            <section className="hero-banner flex justify-between flex-col md:flex-row items-center w-[100%] h-[50%]">
              <div className="antialiased w-1/2 flex align-center justify-center` flex-col">
                <h3 className="text-xl font-semibold text-gray-400 pt-12 text-center">
                  #Big Fashion Sale
                </h3>
                <h2 className="limited text-[4.2em]/27 mt-3 fonts-serif font-bold text-center">
                  Fashion Finds Under $50
                </h2>
                <p className="text-2xl font-bold  text-center text-gray-500 mt-5">
                  Upgrade Your Gaming Gear
                </p>
              </div>

              <div className="hero-images w-1/2 bg-blue-500">
                <img
                  src="/images/333.jpg"
                  className="h-134 object-fill w-full object-cover object-center"
                  alt="banner"
                />
              </div>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="my-7 w-full h-[50%]">
            {/* <!-- 2. Hero Banner Section --> */}
            <section className="hero-banner  flex justify-between flex-col md:flex-row items-center w-full h-full">
              <div className="antialiased w-1/2 flex align-center justify-center flex-col">
                <h3 className="text-xl font-semibold text-gray-400 pt-12">
                  #Big Fashion Sale
                </h3>
                <h3 className="limited text-[4.2em]/27 mt-3 fonts-serif font-bold ">
                  Limited Time Offer! <br/>
                  Up to <span className="italic">50%</span> OFF!
                </h3>
                <p className="text-2xl font-bold text-gray-500 mt-5">
                  Redefine Your Everyday Style
                </p>
              </div>

              <div className="hero-images w-1/2 bg-blue-500">
                <img
                  src="/images/zoe.jpg"
                  className="h-134 object-fill w-full object-cover object-center"
                  alt="banner"
                />
              </div>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="my-7 w-full h-[50%]">
            {/* <!-- 2. Hero Banner Section --> */}
            <section className="hero-banner  flex justify-between flex-col md:flex-row items-center w-full h-full">
              <div className="antialiased w-1/2 flex align-center justify-center flex-col text-center">
                <h3 className="text-xl font-semibold text-gray-400 pt-12">
                  #Big Fashion Sale
                </h3>
                <h2 className="limited text-[4.2em]/27 mt-3 fonts-serif font-bold text-center">
                  Get more! <br />
                  <span className="italic">Pay Less</span>
                </h2>
                <p className="text-2xl font-bold text-gray-500 mt-5 text-center">
                  Redefine Your Everyday Style
                </p>
              </div>

              <div className="hero-images w-1/2 bg-blue-500">
                <img
                  src="/images/32.jpg"
                  className="h-134 object-fill w-full object-cover object-center"
                  alt="banner"
                />
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
