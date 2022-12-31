import React from 'react';
import storageImage from '../../Assets/we are.svg'

const StorageBank = () => {
    return (
        <div className="hero rounded-lg my-16  bg-[#2d2d2d]  shadow-2xl">
        <div className="hero-content flex-col  lg:flex-row-reverse lg:gap-40 items-center justify-center my-24 ">
         
          <div>
            <h1 className="text-4xl font-bold text-[#30FBEF] mb-4">We are a high-level <br /> data storage bank</h1>
            <p className="py-6 text-[#FFFFFF] mb-4">
            The place to store various data that you can access at any time through the internet and where you can carry it. <br /> This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
            </p>
           
          </div>

          <div>
          <img
          alt=""
            src={storageImage}
            className="lg:w-[600px] "
          />
          </div>
        </div>
      </div>
    );
};

export default StorageBank;