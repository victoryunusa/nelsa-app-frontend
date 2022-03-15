import React from "react";

import { useSelector } from "react-redux";
import { getCartItems } from "../../features/cart/cartSlice";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  return (
    <>
      <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <div className="px-5 mt-5">
        <div className="py-4 rounded-md shadow-lg">
          <div className=" px-4 flex justify-between ">
            <span className="font-semibold text-sm">Subtotal</span>
            <span className="font-bold">$35.25</span>
          </div>
          <div className=" px-4 flex justify-between ">
            <span className="font-semibold text-sm">Discount</span>
            <span className="font-bold">- $5.00</span>
          </div>
          <div className=" px-4 flex justify-between ">
            <span className="font-semibold text-sm">Sales Tax</span>
            <span className="font-bold">$2.25</span>
          </div>
          <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
            <span className="font-semibold text-2xl">Total</span>
            <span className="font-bold text-2xl">$37.50</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
