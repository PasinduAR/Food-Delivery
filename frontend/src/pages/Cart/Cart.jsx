import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import {  Navigate, useNavigate} from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-custom-layout items-center text-[#808080] text-responsive05">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-[#e2e2e2] border-none " />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="grid grid-cols-custom-layout cart-items-title cart-items-item my-[10px] mx-[0px] text-black font-medium dark:bg-slate-900 dark:text-white">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross cursor-pointer">x</p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none "/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex-col-reverse md:flex-row flex justify-between gap-custom-gap1 ">
        <div className="cart-total flex-1 flex flex-col gap-[20px] ">
          <h2 className="font-bold ">Cart Totals</h2>
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
          <button onClick={() => navigate('/order')} className="border-none text-white bg-[#ff6347] w-custom-width1 py-[12px] px-[0px] rounded-[4px] cursor-pointer ">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode flex-1 md:justify-start">
          <div>
            <p className="font-semibold text-[#555]">If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input mt-[10px] flex justify-between md:justify-between items-center bg-[#eaeaea] rounded-[4px] ">
              <input className="bg-transparent border-none outline-none pl-[10px] " type="text" placeholder="promo code"/>
              <button className="w-custom-width2 py-[12px] px-[5px] bg-black border-none text-white rounded-[4px] ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
