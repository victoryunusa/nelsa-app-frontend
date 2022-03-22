import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";

import Product from "../components/products/Product";
import Cart from "../components/cart/Cart";
import { clearCart } from "../features/cart/cartSlice";
import { getProducts, reset } from "../features/products/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isError, message } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  let code = new Date().getTime().toString();

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const config = {
    reference: `FPO_${code}`,
    email: user.user.email,
    amount: Math.round(cart.cartTotalAmount * 100),
    publicKey: "pk_test_268fb6118812268b83e3362434b90b0b6c40b72a",
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    dispatch(clearCart());
    toast.success("Your order has been successfully added.");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <div className="container mx-auto">
      <div className="flex pb-5">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Order</h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-5 border bg-white rounded-md p-2.5">
        <div className="w-full lg:w-3/5 min-h-screen">
          <div className="flex flex-row justify-between items-center px-5 mt-5">
            <div className="">
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

          <div className="mt-5 flex w-full flex-row px-5 overflow-x-scroll md:overflow-x-clip">
            <span className="px-5 py-1 bg-teal-900 rounded-2xl text-white text-sm mr-4">
              All
            </span>
            <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Food
            </span>
            <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Cold
            </span>
            <span className="px-5 py-1 w-10 rounded-2xl text-sm font-semibold mr-4">
              Hot
            </span>
          </div>

          <div className="md:m-5 grid grid-cols-2 md:grid-cols-4 bg-zinc-100 p-3 gap-3 px-3 mt-2.5 overflow-y-auto rounded-md h-2/5">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="flex flex-row items-center justify-between px-5 mt-5">
            <div className="font-bold text-xl">Current Order</div>
            <div className="font-semibold">
              <button
                onClick={handleClearCart}
                className="px-4 py-2 rounded-md text-sm font-bold bg-red-100 text-red-500 mr-1"
              >
                Clear All
              </button>
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
                    ₦ 300,000
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
            <button
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
              className="px-4 py-4 w-full rounded-md shadow-lg text-center bg-teal-900 text-white font-semibold"
            >
              Pay With Cashless Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
