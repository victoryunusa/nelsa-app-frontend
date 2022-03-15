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
    <div class="container mx-auto">
      <div className="flex pb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Order</h1>
        </div>
      </div>
      <div class="flex lg:flex-row flex-col-reverse border bg-white rounded-md p-2.5">
        <div class="w-full lg:w-3/5 min-h-screen">
          <div class="flex flex-row justify-between items-center px-5 mt-5">
            <div class="text-gray-800">
              <div class="font-bold text-xl">Select items</div>
              <span class="text-xs">Location ID#SIMON123</span>
            </div>
            <div class="flex items-center">
              <div class="text-sm text-center mr-4">
                <div class="font-light text-gray-500">last synced</div>
                <span class="font-semibold">3 mins ago</span>
              </div>
              <div>
                <span class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded">
                  Help
                </span>
              </div>
            </div>
          </div>

          <div class="mt-5 flex w-full flex-row px-5 overflow-x-scroll md:overflow-none">
            <span class="px-5 py-1 bg-teal-900 rounded-2xl text-white text-sm mr-4">
              All items
            </span>
            <span class="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Food
            </span>
            <span class="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Cold Drinks
            </span>
            <span class="px-5 py-1 w-10 rounded-2xl text-sm font-semibold mr-4">
              Hot Drinks
            </span>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 mt-2.5 overflow-y-auto h-2/4">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div class="w-full lg:w-2/5">
          <div class="flex flex-row items-center justify-between px-5 mt-5">
            <div class="font-bold text-xl">Current Order</div>
            <div class="font-semibold">
              <span class="px-4 py-2 rounded-md bg-red-100 text-red-500 mr-1">
                Clear All
              </span>
              <span class="px-4 py-2 rounded-md bg-gray-100 text-gray-800">
                Setting
              </span>
            </div>
          </div>
          <Cart />
          <div class="px-5 mt-5">
            <div class="rounded-md shadow-lg px-4 py-4">
              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col">
                  <span class="uppercase text-xs font-semibold">
                    cashless credit
                  </span>
                  <span class="text-xl font-bold text-teal-900">$32.50</span>
                  <span class=" text-xs text-gray-400 ">Available</span>
                </div>
                <div class="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold">
                  {" "}
                  Cancel
                </div>
              </div>
            </div>
          </div>
          <div class="px-5 mt-5">
            <div class="px-4 py-4 rounded-md shadow-lg text-center bg-teal-900 text-white font-semibold">
              Pay With Cashless Credit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
