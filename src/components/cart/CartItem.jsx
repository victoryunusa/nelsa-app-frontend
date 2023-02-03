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
    <div className="flex flex-row justify-between items-center bg-white mb-1 p-2.5 shadow-sm border rounded-lg">
      <div className="flex flex-row items-center">
        <img
          src={
            "http://localhost:8888/nelsa-api/storage/app/public/product/" +
            cartItem.image[0]
          }
          alt="product_image"
          className="w-6 h-6 object-cover rounded-md"
        />
      </div>
      <div className="w-1/2">
        <span className=" text-xs font-semibold">{cartItem.name}</span>
      </div>
      <div>
        <h1 className="text-sm w-12">x {cartItem.cartQuantity}</h1>
      </div>
      <div className=" w-20 flex justify-between">
        <h1 className="font-semibold text-sm">
          ₦{" "}
          {dollarUSLocale.format(
            Math.round(cartItem.price * cartItem.cartQuantity)
          )}
        </h1>
      </div>
      <div>
        <button
          className="rounded-lg text-white bg-red-500 h-7 w-7"
          onClick={() => handleRemoveFromCart(cartItem)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
