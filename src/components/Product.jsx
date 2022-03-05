import React from "react";

import image from "../assets/images/strawberry.png";

const Product = ({ product }) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return (
    <div className="bg-white rounded-md p-4 shadow-sm border">
      <img className="w-18 h-18" src={image} alt={product.name} />
      <h4 className="text-sm font-bold">{product.name}</h4>
      <div className="flex flex-row justify-between items-center gap-2 mt-2">
        <div className="text-xs font-bold">
          $ {dollarUSLocale.format(Math.round(product.price))}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex">
          <button
            className=" flex items-center justify-center space-x-2 w-full bg-green-500 hover:bg-teal-900 hover:shadow-md p-2 text-white rounded-md"
            type="submit"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4904 22.75H7.50042C5.78042 22.75 4.49043 22.29 3.69043 21.38C2.89043 20.47 2.58042 19.15 2.79042 17.44L3.69043 9.94C3.95043 7.73 4.51043 5.75 8.41043 5.75H15.6104C19.5004 5.75 20.0604 7.73 20.3304 9.94L21.2304 17.44C21.4304 19.15 21.1304 20.48 20.3304 21.38C19.5004 22.29 18.2204 22.75 16.4904 22.75ZM8.40042 7.25C5.52042 7.25 5.38042 8.38999 5.17042 10.11L4.27043 17.61C4.12043 18.88 4.30042 19.81 4.81042 20.38C5.32042 20.95 6.22042 21.24 7.50042 21.24H16.4904C17.7704 21.24 18.6704 20.95 19.1804 20.38C19.6904 19.81 19.8704 18.88 19.7204 17.61L18.8204 10.11C18.6104 8.37999 18.4804 7.25 15.5904 7.25H8.40042Z"
                fill="currentColor"
              />
              <path
                d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xs">Add to cart</span>
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-teal-900">
            -
          </button>
          <input
            className="m-5 text-xs w-2"
            name="count"
            type="number"
            value="0"
          />
          <button className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-teal-900">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
