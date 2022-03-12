import React from "react";

import { useSelector } from "react-redux";
import { getCartItems } from "../../features/cart/cartSlice";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  return (
    <div className="">
      <div className="text-lg font-semibold">My Order</div>
      <div className="mt-5">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
