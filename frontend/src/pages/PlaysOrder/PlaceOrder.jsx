import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order flex items-start justify-between gap-[50px] mt-[100px] ">
      <div className='place-order-left w-[100%] max-w-custom-max1'>
        <p className="title text-[30px] font-semibold mb-[50px] ">Delivery Information</p>
        <div className="multi-fields flex gap-[10px]">
          <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='First Name'/>
          <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='Last Name'/>
        </div>
        <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="email" placeholder='Email Address'/>
        <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='street'/>
        <div className="multi-fields">
          <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='City'/>
          <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='State'/>
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='Zip code'/>
          <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='contry'/>
        </div>
        <input className='mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] ' type="text" placeholder='phone'/>
      </div>
      <div className='place-order-right w-[100%] max-w-custom-max2 '>
      <div className="cart-total flex-1 flex flex-col gap-[20px] ">
          <h2 className="font-bold text-[20px] ">Cart Totals</h2>
          <div>
          <div className="cart-total-details flex justify-between text-[#555] ">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-none my-[10px] mx-[0px] "/>
            <div className="cart-total-details flex justify-between text-[#555] ">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="h-[1px] bg-[#e2e2e2] border-none my-[10px] mx-[0px] "/>
            <div className="cart-total-details flex justify-between text-[#555] ">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="border-none mt-[30px] text-white bg-[#ff6347] w-custom-width1 py-[12px] px-[0px] rounded-[4px] cursor-pointer ">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder