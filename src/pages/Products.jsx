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
  const { categories } = useSelector((state) => state.categories);

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
    email: "victor@getnelsa.com",
    amount: Math.round(cart.cartTotalAmount * 100),
    publicKey: "pk_test_268fb6118812268b83e3362434b90b0b6c40b72a",
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    dispatch(clearCart());
    toast.success("Your order has been successfully added.");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <div className="container">
      <div className="flex md:flex-row flex-col gap-5 border bg-white rounded-xl p-2.5">
        <div className="w-full lg:w-3/5 min-h-screen">
          <div className="flex flex-row justify-between items-center px-5 mt-5">
            <div className="">
              <div className="font-bold text-xl">Select items</div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-center mr-4">
                <div className="font-light text-zinc-500">last synced</div>
                <span className="font-semibold">3 mins ago</span>
              </div>
              <div>
                <span className="px-4 py-2 bg-zinc-200 text-zinc-800 font-bold rounded-lg">
                  Help
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 w-96 flex flex-row px-2 overflow-x-auto bg-zinc-100 py-2 mx-5 rounded-lg">
            <span className="px-3 py-2.5 bg-black rounded-lg text-white text-xs mr-4 hover:cursor-pointer">
              All
            </span>

            {categories.map((category) => (
              <span
                className="flex items-center px-3 py-2.5 bg-white shadow-md rounded-lg text-xs font-semibold mr-4 hover:cursor-pointer"
                key={category.id}
              >
                <p className="min-w-max">{category.name}</p>
              </span>
            ))}
          </div>

          <div className="md:m-5 grid grid-cols-2 md:grid-cols-4 bg-zinc-100 p-3 gap-3 px-5 mt-2.5 overflow-y-auto rounded-xl h-4/6 md:h-2/6">
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
                className="px-4 py-2 rounded-lg text-sm font-bold bg-red-100 text-red-500 mr-1"
              >
                Clear All
              </button>
            </div>
          </div>
          <Cart />
          <div className="px-5 mt-5">
            <div className="rounded-xl border px-4 py-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="uppercase text-xs font-semibold">
                    cashless credit
                  </span>
                  <span className="text-xl font-bold text-black">
                    ₦ 300,000
                  </span>
                  <span className=" text-xs text-zinc-400 ">Available</span>
                </div>
                <div className="px-4 py-3 bg-zinc-200 text-zinc-800 rounded-lg font-bold">
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
              className="px-4 py-4 w-full rounded-xl shadow-lg text-center bg-black hover:bg-zinc-900 text-white font-semibold"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
