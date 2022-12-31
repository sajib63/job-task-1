import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import image from "../../Assets/girl.png";
import dot from "../../Assets/dot.svg";

const Testimonials = () => {
  return (
    <div className="rounded-lg  mt-28  bg-[#2d2d2d]  shadow-2xl ">
      <h1 className="text-3xl font-bold p-10 text-[#30FBEF]">Testimonials</h1>

      <div className="bg-[#2d2d2d]">
        <Swiper
          spaceBetween={50}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="md:flex   mx-2  justify-center items-center">
              <div className="md:flex m-8 gap-4 bg-[#212121] shadow-2xl   rounded-lg p-8 justify-between">
                <div>
                  <img src={image} alt="" />
                </div>

                <div>
                  <h1 className="text-lg font-bold text-[#30FBEF]">
                    Jenny Doe
                  </h1>

                  <div className="flex items-center justify-between">
                    <p className="text-[#9C69E2]  lg:text-lg">UX Designer</p>
                    <p className="flex text-sm">
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                    </p>
                  </div>
                  <p className="text-white">
                  Suspendisse ultrices at diam lectus nullam. <br className="hidden md:block" />
                   Nisl, sagittis viverra enim erat tortor <br className="hidden md:block" /> ultricies massa turpis. Arcu pulvinar aenean <br className="hidden md:block" /> nam laoreet nulla.
                  </p>
                </div>
              </div>



              
              <div className="md:flex m-8 gap-4 bg-[#212121] shadow-2xl   rounded-lg p-8 justify-between">
                <div>
                  <img src={image} alt="" />
                </div>

                <div>
                  <h1 className="text-lg font-bold text-[#30FBEF]">
                    Jenny Doe
                  </h1>

                  <div className="flex items-center justify-between">
                    <p className="text-[#9C69E2]  lg:text-lg">UX Designer</p>
                    <p className="flex text-sm">
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                    </p>
                  </div>
                  <p className="text-white">
                  Suspendisse ultrices at diam lectus nullam. <br className="hidden md:block" />
                   Nisl, sagittis viverra enim erat tortor <br className="hidden md:block" /> ultricies massa turpis. Arcu pulvinar aenean <br className="hidden md:block" /> nam laoreet nulla.
                  </p>
                </div>
              </div>
              
            </div>

            
          </SwiperSlide>


          <SwiperSlide>
            <div className="md:flex   mx-2  justify-center items-center">
              <div className="md:flex m-8 gap-4 bg-[#212121] shadow-2xl   rounded-lg p-8 justify-between">
                <div>
                  <img src={image} alt="" />
                </div>

                <div>
                  <h1 className="text-lg font-bold text-[#30FBEF]">
                    Jenny Doe
                  </h1>

                  <div className="flex items-center justify-between">
                    <p className="text-[#9C69E2]  lg:text-lg">UX Designer</p>
                    <p className="flex text-sm">
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                    </p>
                  </div>
                  <p className="text-white">
                  Suspendisse ultrices at diam lectus nullam. <br className="hidden md:block"  />
                   Nisl, sagittis viverra enim erat tortor <br className="hidden md:block" /> ultricies massa turpis. Arcu pulvinar aenean <br className="hidden md:block" /> nam laoreet nulla.
                  </p>
                </div>
              </div>



              
              <div className="md:flex m-8 gap-4 bg-[#212121] shadow-2xl   rounded-lg p-8 justify-between">
                <div>
                  <img src={image} alt="" />
                </div>

                <div>
                  <h1 className="text-lg font-bold text-[#30FBEF]">
                    Jenny Doe
                  </h1>

                  <div className="flex items-center justify-between">
                    <p className="text-[#9C69E2]  lg:text-lg">UX Designer</p>
                    <p className="flex text-sm">
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                      <span>
                        <img className="w-5 lg:w-full" src={dot} alt="" />
                      </span>
                    </p>
                  </div>
                  <p className="text-white">
                  Suspendisse ultrices at diam lectus nullam. <br className="hidden md:block" />
                   Nisl, sagittis viverra enim erat tortor <br className="hidden md:block" /> ultricies massa turpis. Arcu pulvinar aenean <br className="hidden md:block" /> nam laoreet nulla.
                  </p>
                </div>
              </div>
              
            </div>

            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
