import React from "react";
import navIcon from '../../Assets/icon.png'
import goArrow from '../../Assets/right arrow.svg'


const Navbar = () => {
  const navItems = (
    <>
      <li>
       <a className=" text-[#30FBEF]">About</a>
      </li>
      <li>
       <a className="text-[#FFFFFF]">Help</a>
      </li>
      <li>
       <a className="text-[#FFFFFF]">Features</a>
      </li>
      <li>
       <a className="text-[#FFFFFF]">Signup</a>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#282828] rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
       <a className=" flex items-center gap-2 font-bold normal-case text-xl  text-[#30FBEF]">
          <span>
            <img className="w-14 h-14" src={navIcon} alt="" />
          </span>
          Insignia
       </a>
      </div>
      <div className="navbar-center hidden lg:flex gap-3  lg:ml-[400px]">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
       <a className="btn bg-[#313131] rounded-l-full rounded-r-full md:w-48 shadow-2xl text-[#30FBEF] p-3 gap-2 border-0">Request Demo <span>
        <img className="w-5" src={goArrow} alt="" /></span></a>
      </div>
    </div>
  );
};

export default Navbar;
