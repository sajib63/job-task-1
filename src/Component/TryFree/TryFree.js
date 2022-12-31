import React from 'react';
import icon from '../../Assets/right arrow.svg'
const TryFree = () => {
    return (
        <div className="mt-10 md:flex justify-between p-4">
      <div>
        <h1 className="text-3xl font-bold  text-[#30FBEF]">Try For Free!</h1>
        <p className="mt-3 text-white">
        Get limited 1 week free try our features!
        </p>
      </div>
      <div className='flex gap-2 '>

       <button className='bg-[#282828] w-[150px] h-[55px]  text-white shadow-xl rounded-l-full rounded-r-full'>Learn More</button>
       <button className='bg-[#282828] w-[200px] h-[55px] text-[#9C69E2] shadow-xl rounded-l-full rounded-r-full flex items-center gap-2 justify-center'>Learn More <span><img className='w-5' src={icon} alt="" /></span></button>
      </div>
    </div>
    );
};

export default TryFree;