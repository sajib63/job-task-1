import React from 'react';
import mobile from '../../Assets/mobile.png'

const Download = () => {
    return (
        <div className="hero rounded-lg  bg-[#2d2d2d] md:mt-60">
        <div className="hero-content flex-col  lg:flex-row-reverse lg:gap-40 items-center justify-center  ">
    
        <div className='lg:mr-10'>
        <img
            alt=""
               src={mobile}
              className=" rounded-lg  lg:w-[600px] lg:-my-28 lg:rotate-12 "
            />
          </div>
         
          <div>
              <h1 className="text-7xl font-bold text-[#30FBEF] mb-4">Download Our App</h1>
              <p className="py-6 text-[#FFFFFF] mb-4">
              The place to store various data that you can access at any time through the internet and where you can carry it. <br /> This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
              </p>
              <button className="btn bg-[#313131] border-0 shadow-2xl rounded-l-full rounded-r-full w-48 p-2">Download</button>
            </div>
    
       
        </div>
      </div>
    );
};

export default Download;