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
    <div class="flex flex-row justify-between items-center mb-4 p-3 border shadow-md rounded-md">
      <div class="flex flex-row items-center w-2/5">
        <img
          src={image}
          alt="product_image"
          class="w-10 h-10 object-cover rounded-md"
        />
        <span class="ml-4 font-semibold text-sm">{cartItem.name}</span>
      </div>
      <div>
        <h1 className="">x {cartItem.cartQuantity} =</h1>
      </div>
      <div class="w-32 flex justify-between">
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

{
  /* <div className="flex flex-row text-xs rounded-md border justify-between items-center space-x-2 p-2 mb-2">
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
</div>; */
}
