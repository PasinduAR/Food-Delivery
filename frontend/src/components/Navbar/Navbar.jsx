import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BiSolidBasket } from "react-icons/bi";

const Navbar = () => {

  const [menu, setMenu] = useState("home");


  const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

  return (
    <div className=' px-0 lg:px-[30px] py-[10px] flex justify-between items-center dark:bg-slate-900 dark:text-white '> 
      <img src={assets.logo} alt="" className=" lg:w-[150px] w-[100px]" />
      <ul className=' hidden md:flex list-none text-[16px] gap-[17px] lg:gap-[20px] text-[#49557e] dark:text-white lg:text-[18px] '>
        <li onClick={() =>setMenu("home") } className={`cursor-pointer ${menu==="home"?"pb-[2px] border-b-2 border-[#49557e] ":""}`}>home</li>
        <li onClick={() =>setMenu("menu") } className={`cursor-pointer ${menu==="menu"?"pb-[2px] border-b-2 border-[#49557e] ":""}`}>menu</li>
        <li onClick={() =>setMenu("mobile-app") } className={`cursor-pointer ${menu==="mobile-app"?"pb-[2px] border-b-2 border-[#49557e] ":""}`}>mobile app</li>
        <li onClick={() =>setMenu("contact-us") } className={`cursor-pointer ${menu==="contact-us"?"pb-[2px] border-b-2 border-[#49557e] ":""}`}>contact us</li>
      </ul>
      <div className="flex items-center gap-[15px] lg:gap-[40px]">
        <IoIosSearch className=' text-2xl lg:text-3xl'/>
      <button onClick={()=> darkModeHandler()} className=' fixed bottom-10 bg-slate-800 p-3 rounded-full text-white z-50 right-6 sm:relative sm:right-0 sm:bottom-0 sm:bg-transparent sm:text-inherit sm:block'>
          {
              
              dark && <MdOutlineWbSunny className=' text-2xl lg:text-3xl'/> // render sunny when dark is true
          }
          {
              !dark && <IoMoonOutline className=' text-2xl lg:text-3xl'/> // render moon when dark is false
          }
      </button>
        <div className="relative">
          <BiSolidBasket className=' text-2xl lg:text-3xl'/>
          <div className="absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className=' bg-transparent text-[14px] lg:text-[16px] text-[#49557e] border-solid border-[1px]  border-[#ff6347] px-[18px] py-[5px] lg:px-[30px] lg:py-[10px] rounded-[50px] cursor-pointer duration-300 hover:bg-[#fff4f2] dark:text-white dark:hover:text-slate-900'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar