import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";
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
    <div className="container">
      <div className="flex mb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold ">Order Now</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-4/6">
          <div className="grid grid-flow-row md:grid-cols-5 flex-warp gap-6">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="w-2/6 rounded-md bg-white p-10">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Products;
