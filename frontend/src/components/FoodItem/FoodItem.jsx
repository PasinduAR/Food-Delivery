import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className=' w-[100%] m-auto rounded-[15px] shadow-custom duration-[0.3s] animate-fadeIn2 '>
      <div className="relative">
        <img className='w-[100%] rounded-custom-tl-br' src={image} alt="" />
        {!cartItems[id]
            ?<img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%] ' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white '>
                <img className='w-[30px]' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img className='w-[30px]' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="p-[20px]">
        <div className=" flex justify-between items-center mb-[10px] ">
          <p className=' text-[20px] font-medium '>{name}</p>
          <img className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className=" text-[#ff6347] text-[22px] font-medium my-[10px] mx-[0px] ">${price} </p>  
      </div>
    </div>
  )
}

export default FoodItem