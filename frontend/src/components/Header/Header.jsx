import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative ">
      <div className="  absolute flex flex-col items-start gap-[1.5vw] max-w-[60%] lg:max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn ">
        <h2 className=" font-medium text-white text-responsive01">Order your favourite food here</h2>
        <p className=" hidden md:flex text-white text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <button className=" border-none text-[#747474] font-medium md:px-[2.3vw] md:py-[1vw] px-[4vw] py-[2vw] bg-white text-responsive02 rounded-[50px] ">View Menu</button>
      </div>
    </div>
  )
}

export default Header