import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotals } from "../../features/cart/cartSlice";

import CartItem from "./CartItem";

const Cart = () => {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  return (
    <>
      <div className="m-2 md:m-5 p-2.5 bg-zinc-100 rounded-xl mt-5 overflow-y-auto h-64">
        {cartItems.length >= 1 ? (
          cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))
        ) : (
          <div className="flex items-center justify-center text-sm mt-20">
            <p>Please add items to your cart</p>
          </div>
        )}
      </div>
      <div className="px-5 mt-5">
        <div className="py-4 px-3 rounded-xl border">
          <div className="flex px-4 w-full rounded-lg my-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter coupon code"
              className="w-full rounded-l-lg border-l border-zinc-200 bg-zinc-50"
            />
            <button className="bg-black text-white text-sm font-semibold p-3 rounded-r-lg focus-none">
              Apply
            </button>
          </div>
          <div className=" px-4 flex justify-between ">
            <span className="font-semibold text-sm">Subtotal</span>
            <span className="font-bold">
              ₦ {dollarUSLocale.format(Math.round(cart.cartTotalAmount))}
            </span>
          </div>
          <div className=" px-4 flex justify-between ">
            <span className="font-semibold text-sm">Discount</span>
            <span className="font-bold">- ₦0.00</span>
          </div>
          <div className=" px-4 flex justify-between ">
            <span className="font-semibold text-sm">Shipping</span>
            <span className="font-bold">₦2.25</span>
          </div>
          <div className="border-t border-zinc-200 mt-3 py-2 px-4 flex items-center justify-between">
            <span className="font-semibold text-2xl">Total</span>
            <span className="font-bold text-2xl">
              ₦ {dollarUSLocale.format(Math.round(cart.cartTotalAmount))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
