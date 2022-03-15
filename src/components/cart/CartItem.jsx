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
    <div className="flex flex-row justify-between items-center mb-4 p-3 border shadow-md rounded-md">
      <div className="flex flex-row items-center w-2/5">
        <img
          src={image}
          alt="product_image"
          className="w-10 h-10 object-cover rounded-md"
        />
        <span className="ml-4 font-semibold text-sm">{cartItem.name}</span>
      </div>
      <div>
        <h1 className="">x {cartItem.cartQuantity} =</h1>
      </div>
      <div className="w-32 flex justify-between">
        <h1 className="font-semibold">
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
