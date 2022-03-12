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
    <div className="flex flex-row text-xs rounded-md border justify-between items-center space-x-2 p-2 mb-2">
      <div>
        <img className="w-5 h-5 rounded-md" src={image} alt="product_image" />
      </div>
      <div>
        <h1 className="">{cartItem.name}</h1>
      </div>
      <div>
        <h1 className="">x {cartItem.cartQuantity}</h1>
      </div>
      <div>
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
