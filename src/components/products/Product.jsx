import React from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/images/strawberry.png";
import { addItemToCart, decrease } from "../../features/cart/cartSlice";
const BaseUrl = process.env.REACT_APP_MAIN_URL;

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
    <div className=" flex flex-col bg-white shadow-md border rounded-lg justify-between">
      <div className="flex items-center justify-center">
        <img
          src={
            "http://localhost:8888/nelsa-api/storage/app/public/product/" +
            product.image[0]
          }
          className="h-20 w-20 object-fit rounded-lg"
          alt={product.name}
        />
      </div>

      <div className="p-3">
        <div className="flex flex-col mb-1">
          <div className="text-xs font-semibold w-full">
            <h3 className="text-clip ">{product.name}</h3>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mb-2">
          <span className="self-end font-bold text-sm text-black">
            ₦ {dollarUSLocale.format(Math.round(product.price))}/
            <span className="font-bold text-xs text-neutral-500">
              {product.capacity}
              {product.unit}
            </span>
          </span>
        </div>
        <div className="w-full">
          {itemIndex ? (
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleDecreaseCart(product)}
                className=" text-white rounded-md bg-black hover:bg-zinc-900 cursor-pointer w-1/3"
              >
                -
              </button>
              <span className="font-semibold text-sm w-2">
                {itemIndex.cartQuantity}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className=" text-white rounded-md bg-black hover:bg-zinc-900 cursor-pointer w-1/3"
              >
                +
              </button>
            </div>
          ) : (
            <div className=" ">
              <button
                className="p-1 flex items-center justify-center text-white rounded-md bg-black hover:bg-zinc-900 w-full"
                onClick={() => handleAddToCart(product)}
              >
                <span className="text-xs">Add to cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
