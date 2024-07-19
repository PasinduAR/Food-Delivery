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
    <div className=' px-[30px] py-[10px] flex justify-between items-center dark:bg-slate-900 dark:text-white'> 
      <img src={assets.logo} alt="" className="w-[150px]" />
      <ul className='flex list-none gap-[20px] text-[#49557e] dark:text-white text-[18px]'>
        <li onClick={() =>setMenu("home") } className={`cursor-pointer ${menu==="home"?"active":""}`}>home</li>
        <li onClick={() =>setMenu("menu") } className={`cursor-pointer ${menu==="menu"?"active":""}`}>menu</li>
        <li onClick={() =>setMenu("mobile-app") } className={`cursor-pointer ${menu==="mobile-app"?"active":""}`}>mobile app</li>
        <li onClick={() =>setMenu("contact-us") } className={`cursor-pointer ${menu==="contact-us"?"active":""}`}>contact us</li>
      </ul>
      <div className="flex items-center gap-[40px]">
        <IoIosSearch className=' text-3xl'/>
      <button onClick={()=> darkModeHandler()}>
          {
              
              dark && <MdOutlineWbSunny className=' text-3xl'/> // render sunny when dark is true
          }
          {
              !dark && <IoMoonOutline className=' text-3xl'/> // render moon when dark is false
          }
      </button>
        <div className="relative">
          <BiSolidBasket className=' text-3xl'/>
          <div className="absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className=' bg-transparent text-[16px] text-[#49557e] border-solid border-[1px]  border-[#ff6347] px-[30px] py-[10px] rounded-[50px] cursor-pointer duration-300 hover:bg-[#fff4f2] dark:text-white dark:hover:text-slate-900'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar