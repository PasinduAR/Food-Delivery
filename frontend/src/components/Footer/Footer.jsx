import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]" id="footer">
      <div className="w-[100%] grid grid-cols-custom gap-[80px]">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={assets.logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type an scrambled it to make a type specimen book.</p>
          <div className="flex style-none mb-[10px] cursor-pointer">
            <img className="w-[40px] mr-[15px]" src={assets.facebook_icon} alt="" />
            <img className="w-[40px] mr-[15px]" src={assets.twitter_icon} alt="" />
            <img className="w-[40px] mr-[15px]" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white">COMPANY</h2>
          <ul className="style-none mb-[10px] cursor-pointer ">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul className=" style-none mb-[10px] cursor-pointer ">
            <li>+94-783-654-052</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] m-[20px] bg-[grey] border-none "/>
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
