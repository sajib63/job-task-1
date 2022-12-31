import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import arrow from "../../Assets/right arrow.svg";
import icon from "../../Assets/icon 1.svg";
import icon2 from "../../Assets/icon 2.svg";


const Carousel = () => {
  return (
    <div className="rounded-lg  my-16  bg-[#2d2d2d]  shadow-2xl ">
      <h1 className="text-3xl font-bold p-10 text-[#30FBEF]">Features</h1>

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
            <div className="md:flex md:gap-5 lg:gap-32 mx-2 lg:mx-10 my-4">
              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px]  ">
                <div className="items-center justify-center flex text-center">
                  <img src={icon} alt="" />
                </div>

                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Search Data
                </h1>

                <p className=" text-[#FFFFFF] my-4">
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center  gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>

              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px] hidden md:block">
                <div className="items-center justify-center flex text-center">
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Search Data
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>

              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px] hidden md:block">
                <div className="items-center justify-center flex text-center">
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Search Data
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>
            </div>



          </SwiperSlide>

          <SwiperSlide>
            <div className="md:flex md:gap-5 lg:gap-32 mx-2 lg:mx-10 my-4">
              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px]">
                <div className="items-center justify-center flex text-center">
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Search Data
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>

              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px] hidden md:block">
                <div className="items-center justify-center flex text-center">
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Search Data
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>

              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px] hidden md:block">
                <div className="items-center justify-center flex text-center">
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Search Data
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Don’t worry if your data is very large, Insignia provides a
                  search engine, which is useful for making it easier to find
                  data effectively saving time.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex md:gap-5 lg:gap-32 mx-2 lg:mx-10 my-4">
              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px]">
                <div className="items-center justify-center flex text-center">
                  <img src={icon2} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Print Out
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>
              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px] hidden md:block">
                <div className="items-center justify-center flex text-center">
                  <img src={icon2} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Print Out
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>
              <div className="p-4 bg-[#212121] shadow-2xl   rounded-lg lg:w-[605px] hidden md:block">
                <div className="items-center justify-center flex text-center">
                  <img src={icon2} alt="" />
                </div>
                <h1 className="text-3xl font-bold  text-[#30FBEF]">
                  Print Out
                </h1>
                <p className=" text-[#FFFFFF] my-4">
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <a
                  href=""
                  className="text-[#30FBEF] flex items-center gap-2 mt-10"
                >
                  Learn More
                  <span>
                    <img className="w-5" src={arrow} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
