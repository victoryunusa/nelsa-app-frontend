import React from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../assets/images/strawberry.png";
import { addItemToCart, decrease } from "../features/cart/cartSlice";

const Product = ({ product }) => {
  //const [quantity, setQuantity] = useState(1);
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
    <div className="bg-white rounded-md p-5 shadow-md">
      <div className="flex justify-center items-center">
        <img className="h-15" src={image} alt={product.name} />
      </div>
      <h4 className="text-xs font-semibold">{product.name}</h4>
      <div className="flex flex-row justify-between items-center gap-2 ">
        <div className="text-sm font-bold">
          ₦ {dollarUSLocale.format(Math.round(product.price))}
        </div>
      </div>
      <div className="mt-2">
        {itemIndex ? (
          <div className="flex w-full items-center justify-between">
            <button
              className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-teal-900"
              onClick={() => handleDecreaseCart(product)}
            >
              -
            </button>
            <span className="text-xs w-4" name="count" type="number">
              {itemIndex.cartQuantity}
            </span>
            <button
              className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-teal-900"
              onClick={() => handleAddToCart(product)}
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="text-white bg-green-500 w-full px-3 py-1 rounded-md hover:bg-teal-900"
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
