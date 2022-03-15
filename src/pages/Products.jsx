import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/products/Product";
import Cart from "../components/cart/Cart";
import { getProducts, reset } from "../features/products/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isError, message } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // const AddToCart = (e) => {
  //   e.preventDeafault();
  //   history.pushState(`/cart/${}?qty=${qty}`);
  // };
  return (
    <div className="container mx-auto">
      <div className="flex pb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Order</h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse border bg-white rounded-md p-2.5">
        <div className="w-full lg:w-3/5 min-h-screen">
          <div className="flex flex-row justify-between items-center px-5 mt-5">
            <div className="text-gray-800">
              <div className="font-bold text-xl">Select items</div>
              <span className="text-xs">Location ID#SIMON123</span>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-center mr-4">
                <div className="font-light text-gray-500">last synced</div>
                <span className="font-semibold">3 mins ago</span>
              </div>
              <div>
                <span className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded">
                  Help
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex w-full flex-row px-5 overflow-x-scroll md:overflow-none">
            <span className="px-5 py-1 bg-teal-900 rounded-2xl text-white text-sm mr-4">
              All items
            </span>
            <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Food
            </span>
            <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Cold Drinks
            </span>
            <span className="px-5 py-1 w-10 rounded-2xl text-sm font-semibold mr-4">
              Hot Drinks
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 mt-2.5 overflow-y-auto h-2/4">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="flex flex-row items-center justify-between px-5 mt-5">
            <div className="font-bold text-xl">Current Order</div>
            <div className="font-semibold">
              <span className="px-4 py-2 rounded-md bg-red-100 text-red-500 mr-1">
                Clear All
              </span>
              <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">
                Setting
              </span>
            </div>
          </div>
          <Cart />
          <div className="px-5 mt-5">
            <div className="rounded-md shadow-lg px-4 py-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="uppercase text-xs font-semibold">
                    cashless credit
                  </span>
                  <span className="text-xl font-bold text-teal-900">
                    $32.50
                  </span>
                  <span className=" text-xs text-gray-400 ">Available</span>
                </div>
                <div className="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold">
                  {" "}
                  Cancel
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 mt-5">
            <div className="px-4 py-4 rounded-md shadow-lg text-center bg-teal-900 text-white font-semibold">
              Pay With Cashless Credit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
