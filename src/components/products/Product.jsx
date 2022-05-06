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
    <div className="px-3 py-3 flex flex-col bg-white shadow-md border rounded-md justify-between">
      <div>
        <div className="font-bold text-sm md:text-base">{product.name}</div>
        <span className="font-light text-sm text-gray-400">150g</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="self-end font-bold text-base md:text-lg text-black">
          ₦ {dollarUSLocale.format(Math.round(product.price))}
        </span>
        <img
          src={image}
          className=" h-10 w-10 object-cover rounded-md"
          alt={product.name}
        />
      </div>
      <div className="mt-2">
        {itemIndex ? (
          <div className="w-full flex justify-between">
            <button
              onClick={() => handleDecreaseCart(product)}
              className="px-3 py-1 w-14 text-white rounded-md bg-emerald-700 hover:bg-emerald-900 cursor-pointer"
            >
              -
            </button>
            <span className="font-semibold mx-4">{itemIndex.cartQuantity}</span>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-3 py-1 w-14 text-white rounded-md bg-emerald-700 hover:bg-emerald-900 cursor-pointer"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="text-white bg-emerald-700 w-full px-3 py-1 rounded-md hover:bg-emerald-900"
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
