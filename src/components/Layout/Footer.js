import {
    Email,
    Facebook,
    Instagram,
    PhoneInTalk,
    Twitter,
  } from "@mui/icons-material";
  import React from "react";
  
  const Footer = () => {
    return (
      <div className="bg-lime-900 text-white mt-10 pt-10 ">
        <div className="px-5 w-10/12 mx-auto flex justify-between">
          <div>
            <p className="font-bold hover:text-gray-300">CaredBy Fund</p>
            <p className="cursor-pointer hover:text-gray-300">About us</p>
            <p className="cursor-pointer hover:text-gray-300">Services</p>
            <p className="cursor-pointer hover:text-gray-300">Products</p>
          </div>
          <div className="flex flex-col">
            <div className="font-bold">Contact Us</div>
  
            <div className="flex space-x-2">
              <PhoneInTalk />
              <p>9283883838</p>
            </div>
            <div className="flex space-x-2">
              <Email />
              <p className="cursor-pointer hover:text-gray-300">CaredByFund@gmail.com</p>
            </div>
          </div>
  
          <div className="flex flex-col cursor-pointer ">
            <div className="font-bold"> Legal</div>
            
              <div className="hover:text-gray-300">
                <p>Privacy Policy</p>
              </div>
           
            
              <div className="hover:text-gray-300">
                <p>Terms & Conditions</p>
              </div>
           
          </div>
  
          <div>
            <div className="font-bold"> Follow us on</div>
            <div className="flex space-x-1 cursor-pointer ">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
  
        <div className="flex justify-center mt-10 py-4 ">
          <span>© 2021 Copyright: CaredByFund</span>
        </div>
      </div>
    );
  };
  
  export default Footer;
  