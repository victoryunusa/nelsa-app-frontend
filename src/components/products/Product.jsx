import React from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/images/strawberry.png";
import { addItemToCart, decrease } from "../../features/cart/cartSlice";

const Product = ({ product }) => {
  //Get Cart Items from State
  const { cartItems } = useSelector((state) => state.cart);
  const itemIndex = cartItems.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  //Add product to cart
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  //Decrease product quantity
  const handleDecreaseCart = (product) => {
    dispatch(decrease(product));
  };
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return (
    <div className="px-3 py-3 flex flex-col bg-white shadow-md border rounded-lg justify-between">
      <div className="flex flex-col">
        <div className="text-sm">{product.name}</div>
        <span className="font-light text-xs text-gray-400">150g</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="self-end font-semibold text-sm text-black">
          ₦ {dollarUSLocale.format(Math.round(product.price))}
        </span>
        <img
          src={image}
          className=" h-12 w-12 object-cover rounded-lg"
          alt={product.name}
        />
      </div>
      <div className="mt-2">
        {itemIndex ? (
          <div className="w-full flex justify-between items-center">
            <button
              onClick={() => handleDecreaseCart(product)}
              className="px-1 w-10 text-white rounded-lg bg-black hover:bg-zinc-900 cursor-pointer"
            >
              -
            </button>
            <span className="font-semibold mx-4">{itemIndex.cartQuantity}</span>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-1  w-10 text-white rounded-lg bg-black hover:bg-zinc-900 cursor-pointer"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="text-white w-full px-1 py-1 rounded-lg bg-black hover:bg-zinc-900 flex items-center justify-center"
              onClick={() => handleAddToCart(product)}
            >
              <span className="text-xs">Add to cart</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
