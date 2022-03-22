import React from "react";
import { useDispatch } from "react-redux";

import image from "../../assets/images/strawberry.png";

import { removeFromCart } from "../../features/cart/cartSlice";

function CartItem({ cartItem }) {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  return (
    <div className="flex flex-row justify-between items-center bg-white mb-1 p-2.5 shadow-sm border rounded-md">
      <div className="flex flex-row items-center w-3/5">
        <img
          src={image}
          alt="product_image"
          className="w-6 h-6 object-cover rounded-md"
        />
        <span className="ml-4 md:font-semibold text-sm">{cartItem.name}</span>
      </div>
      <div>
        <h1 className="text-sm w-10">x {cartItem.cartQuantity}</h1>
      </div>
      <div className="pl-2 w-24 flex justify-between">
        <h1 className="font-semibold text-sm">
          ₦{" "}
          {dollarUSLocale.format(
            Math.round(cartItem.price * cartItem.cartQuantity)
          )}
        </h1>
      </div>
      <div>
        <button
          className="rounded-md text-white bg-red-500 h-7 w-7"
          onClick={() => handleRemoveFromCart(cartItem)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
