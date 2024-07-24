import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-[20px] dark:text-white ' id='explore-menu'>
      <h1 className="text-[32px] text-[#262626] font-medium dark:text-white ">Explore our menu</h1>
      <p className=" text-[14px] md:text-[16px] max-w-[100%] md:max-w-[60%] text-[#747474]  ">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
      <div className=" no-scrollbar flex justify-between items-center gap-[30px] text-center mx-[20px] my-[0px] overflow-x-scroll ">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index}>
              <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 ${category === item.menu_name ? "border-[4px] border-solid border-[#ff6347] p-[2px] " : ""}`}src={item.menu_image} alt="" />
              <p className=" mt-[10px] text-[#747474] text-responsive03 cursor-pointer dark:text-white">{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className=' mx-[10px] my-[0px] h-[2px] bg-[#e2e2e2] border-none ' />
    </div>
  )
}

export default ExploreMenu