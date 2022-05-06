import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="container">
      <div className="flex pb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">
            Hi, {user && user.user.firstname}
            <span className="font-regular text-emerald-700">
              {" "}
              Good afternoon
            </span>
          </h1>
        </div>
      </div>
      <div className="md:flex-row flex flex-col gap-6">
        <div className="flex flex-col items-center w-full md:w-1/3 bg-white rounded-lg pb-5">
          <div className="bg-repeat bg-emerald-700 bg-dash-card backdrop-blur-xl w-full rounded-lg p-5 text-white pb-28">
            <div className="flex flex-row justify-between">
              <div className="font-semibold text-lg">Manage App</div>
              <div className="cursor-pointer hover:bg-emerald-600 rounded-lg p-1.5">
                <svg
                  className="w-7 h-7 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5401 8.31014C18.8987 8.31014 20.0001 7.20876 20.0001 5.85014C20.0001 4.49152 18.8987 3.39014 17.5401 3.39014C16.1814 3.39014 15.0801 4.49152 15.0801 5.85014C15.0801 7.20876 16.1814 8.31014 17.5401 8.31014Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M6.46001 8.31014C7.81863 8.31014 8.92 7.20876 8.92 5.85014C8.92 4.49152 7.81863 3.39014 6.46001 3.39014C5.10139 3.39014 4 4.49152 4 5.85014C4 7.20876 5.10139 8.31014 6.46001 8.31014Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M17.5401 20.6099C18.8987 20.6099 20.0001 19.5086 20.0001 18.1499C20.0001 16.7913 18.8987 15.6899 17.5401 15.6899C16.1814 15.6899 15.0801 16.7913 15.0801 18.1499C15.0801 19.5086 16.1814 20.6099 17.5401 20.6099Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-6">
              <div className="flex flex-col">
                <span className="text-sm">Your balance</span>
                <div className="font-bold text-4xl">₦300,000</div>
              </div>

              <div>
                <button className="bg-green-500 rounded-lg px-3 py-2 text-white font-semibold text-sm hover:bg-emerald-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  Boost
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 -mt-20 p-5">
            <Link to="/products">
              <div className="flex flex-col justify-center items-center w-full bg-white border drop-shadow-sm rounded-lg p-5 md:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="bg-emerald-200 text-emerald-700 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6998 22.75H9.29977C4.35977 22.75 2.25977 20.64 2.25977 15.71V11.22C2.25977 10.81 2.59977 10.47 3.00977 10.47C3.41977 10.47 3.75977 10.81 3.75977 11.22V15.71C3.75977 19.8 5.20977 21.25 9.29977 21.25H14.6898C18.7798 21.25 20.2298 19.8 20.2298 15.71V11.22C20.2298 10.81 20.5698 10.47 20.9798 10.47C21.3898 10.47 21.7298 10.81 21.7298 11.22V15.71C21.7398 20.64 19.6298 22.75 14.6998 22.75Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.999 12.75C10.899 12.75 9.89902 12.32 9.18902 11.53C8.47902 10.74 8.14902 9.71 8.25902 8.61L8.92903 1.93C8.96903 1.55 9.28903 1.25 9.67903 1.25H14.349C14.739 1.25 15.059 1.54 15.099 1.93L15.769 8.61C15.879 9.71 15.549 10.74 14.839 11.53C14.099 12.32 13.099 12.75 11.999 12.75ZM10.349 2.75L9.74902 8.76C9.67902 9.43 9.87903 10.06 10.299 10.52C11.149 11.46 12.849 11.46 13.699 10.52C14.119 10.05 14.319 9.42 14.249 8.76L13.649 2.75H10.349Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.31 12.75C16.28 12.75 14.47 11.11 14.26 9.09L13.56 2.08C13.54 1.87 13.61 1.66 13.75 1.5C13.89 1.34 14.09 1.25 14.31 1.25H17.36C20.3 1.25 21.67 2.48 22.08 5.5L22.36 8.28C22.48 9.46 22.12 10.58 21.35 11.43C20.58 12.28 19.5 12.75 18.31 12.75ZM15.14 2.75L15.76 8.94C15.89 10.19 17.05 11.25 18.31 11.25C19.07 11.25 19.75 10.96 20.24 10.43C20.72 9.9 20.94 9.19 20.87 8.43L20.59 5.68C20.28 3.42 19.55 2.75 17.36 2.75H15.14Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.63904 12.75C4.44904 12.75 3.36904 12.28 2.59904 11.43C1.82904 10.58 1.46904 9.46 1.58904 8.28L1.85904 5.53C2.27904 2.48 3.64904 1.25 6.58905 1.25H9.63904C9.84904 1.25 10.049 1.34 10.199 1.5C10.349 1.66 10.409 1.87 10.389 2.08L9.68904 9.09C9.47904 11.11 7.66904 12.75 5.63904 12.75ZM6.58905 2.75C4.39904 2.75 3.66904 3.41 3.34904 5.7L3.07904 8.43C2.99904 9.19 3.22904 9.9 3.70904 10.43C4.18904 10.96 4.86904 11.25 5.63904 11.25C6.89904 11.25 8.06904 10.19 8.18904 8.94L8.80905 2.75H6.58905Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22V19.5C8.75 17.4 9.9 16.25 12 16.25C14.1 16.25 15.25 17.4 15.25 19.5V22C15.25 22.41 14.91 22.75 14.5 22.75ZM10.25 21.25H13.75V19.5C13.75 18.24 13.26 17.75 12 17.75C10.74 17.75 10.25 18.24 10.25 19.5V21.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mt-3 font-bold">Order Now</div>
              </div>
            </Link>

            <Link to="/products">
              <div className="flex flex-col justify-center items-center w-full bg-white border drop-shadow-sm rounded-lg p-5 md:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-200 text-blue-700 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M6.23929 7.98021C6.91929 5.05021 11.3193 5.05021 11.9993 7.98021C12.3893 9.70021 11.3093 11.1602 10.3593 12.0602C9.66928 12.7202 8.5793 12.7202 7.8793 12.0602C6.9293 11.1602 5.83929 9.70021 6.23929 7.98021Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      opacity="0.4"
                      d="M9.09412 8.7002H9.1031"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-3 font-bold">Track Order</div>
              </div>
            </Link>
            <Link to="/products">
              <div className="flex flex-col justify-center items-center w-full bg-white border drop-shadow-sm rounded-lg p-5 md:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="bg-rose-200 text-rose-700 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M6.23929 7.98021C6.91929 5.05021 11.3193 5.05021 11.9993 7.98021C12.3893 9.70021 11.3093 11.1602 10.3593 12.0602C9.66928 12.7202 8.5793 12.7202 7.8793 12.0602C6.9293 11.1602 5.83929 9.70021 6.23929 7.98021Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      opacity="0.4"
                      d="M9.09412 8.7002H9.1031"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-3 font-bold">Add Address</div>
              </div>
            </Link>
            <Link to="/products">
              <div className="flex flex-col justify-center items-center w-full bg-white border drop-shadow-sm rounded-lg p-5 md:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="bg-yellow-200 text-yellow-600 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M6.23929 7.98021C6.91929 5.05021 11.3193 5.05021 11.9993 7.98021C12.3893 9.70021 11.3093 11.1602 10.3593 12.0602C9.66928 12.7202 8.5793 12.7202 7.8793 12.0602C6.9293 11.1602 5.83929 9.70021 6.23929 7.98021Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      opacity="0.4"
                      d="M9.09412 8.7002H9.1031"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-3 font-bold">New Card</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex gap-x-5 w-full md:w-1/3">
          <div className="flex flex-col w-full gap-6">
            <div className="bg-white p-5 h-1/2 rounded-lg">
              <span className="font-semibold text-lg">Delivery schedule</span>
              <div className=""></div>
            </div>
            <div className="bg-white p-5 h-1/2 rounded-lg">
              <span className="font-semibold text-lg">Announcements</span>
            </div>
          </div>
        </div>
        <div className="flex p-6 gap-x-4 w-full md:w-1/3 bg-white rounded-lg border">
          <span className="font-semibold text-lg">Achievements</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
