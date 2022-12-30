import React from "react";
import heroImage from '../../Assets/header image.svg'

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col  lg:flex-row-reverse lg:gap-40">
        <img
        alt=""
          src={heroImage}
          className=" rounded-lg"
        />
        <div>
          <h1 className="text-7xl font-bold text-[#30FBEF] mb-4">Save your data <br /> storage here.</h1>
          <p className="py-6 text-[#FFFFFF] mb-4">
          Insignia is a data storage area that has been tested for <br /> security, so you can store your data here safely but not be <br /> afraid of being stolen by others.
          </p>
          <button className="btn bg-[#313131] border-0 shadow-2xl rounded-l-full rounded-r-full w-48 p-2">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
