import React from "react";
import icon from "../../Assets/icon.png";
import facebook from "../../Assets/facebook.svg";
import tweeter from "../../Assets/twiteer.svg";
import instagram from "../../Assets/insta.svg";

import { AiOutlineMessage } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <div className="">
            <div className="flex items-center gap-2 -mt-6">
              <img className="w-14" src={icon} alt="" />
              <h1 className="text-3xl font-bold  text-[#30FBEF]">Insignia</h1>
            </div>
            <p className="text-[#30FBEF] mt-5">
              Insignia Society,243 Bahagia Ave Street PRBW 29281
            </p>
            <p className="text-[#30FBEF] mt-2">
              infi@insignia.com 1-232-343 (Main)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <h1 className=" mb-4  text-[#30FBEF]">About</h1>
            <h1 className="   text-[#30FBEF]">Profile</h1>
            <h1 className="  text-[#30FBEF]">Features</h1>
            <h1 className="   text-[#30FBEF]">Careers</h1>
            <h1 className="   text-[#30FBEF]">DW News</h1>
          </div>

          <div>
            <h1 className=" mb-4   text-[#30FBEF]">Help</h1>
            <h1 className="   text-[#30FBEF]">Support</h1>
            <h1 className="  text-[#30FBEF]">Sign Up</h1>
            <h1 className="   text-[#30FBEF]">Guid</h1>
            <h1 className="   text-[#30FBEF]">Reports</h1>
            <h1 className="   text-[#30FBEF]">Q&A</h1>
          </div>

          <div>
            <h1 className=" mb-8   text-[#30FBEF]">social Media</h1>

            <div className="flex gap-5">
              <div className="rounded-full border shadow-xl bg-[#282828] p-2">
                <img src={facebook} alt="" />
              </div>
              <div className="rounded-full border shadow-xl bg-[#282828] p-2">
                <img src={tweeter} alt="" />
              </div>
              <div className="rounded-full border shadow-xl bg-[#282828] p-2">
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-[#30FBEF]">
          © Copyright 2020. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <p className="text-white shadow-xl bg-[#2e2e2e] p-2 rounded-full"><AiOutlineMessage></AiOutlineMessage></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
