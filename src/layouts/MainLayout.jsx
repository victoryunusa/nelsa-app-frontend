import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/nelsa-logo-white.svg";

import { logout, reset } from "../features/auth/authSlice";
import { clearCart } from "../features/cart/cartSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  //const [isActive, setIsActive] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(reset());
    dispatch(clearCart());
    dispatch(logout());
    navigate("/auth/login");
  };

  const activeLink =
    "flex space-x-3 items-center  text-md py-2.5 px-6 my-3 border-white bg-zinc-900 rounded-lg transition duration-200";
  const normalLink =
    "flex space-x-3 items-center text-md py-2.5 px-6 my-3 hover:border-white hover:bg-zinc-900 rounded-lg transition duration-200";

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen lg:flex font-redhat bg-neutral-100 text-gray-800 overflow-x-0">
      <aside
        className={`absolute ${
          !isOpen ? "-translate-x-full" : "-translate-x-0"
        } inset-y-0 left-0 overflow-x-hidden overflow-y-auto transform md:transform-none z-10 w-72 bg-black text-white sticky top-0 h-screen p-3`}
      >
        <nav className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between	">
              <span className="text-2xl sm:text-3xl font-rubik font-bold p-5">
                <img className="w-20" src={logo} alt="logo" />
              </span>
              <button
                onClick={onClick}
                className="p-2 focus:outline-none md:hidden focus:bg-black hover:bg-black cursor-pointer rounded-md"
              >
                <svg
                  className="w-7 h-7"
                  width="7"
                  height="7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-between mt-16">
              <div className="space-y-2">
                <NavLink
                  onClick={onClick}
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5999 22.5601H6.39985C4.57984 22.5601 2.91985 21.1601 2.61985 19.3601L1.28984 11.4001C1.07984 10.1601 1.67985 8.57011 2.66985 7.78011L9.59986 2.23006C10.9399 1.15006 13.0498 1.16007 14.3998 2.24007L21.3299 7.78011C22.3099 8.57011 22.9099 10.1601 22.7099 11.4001L21.3799 19.3601C21.0799 21.1301 19.3899 22.5601 17.5999 22.5601ZM11.9899 2.94008C11.4599 2.94008 10.9298 3.10005 10.5398 3.41005L3.60985 8.9601C3.03985 9.4201 2.64986 10.4401 2.76986 11.1601L4.09986 19.1201C4.27986 20.1701 5.32984 21.0601 6.39985 21.0601H17.5999C18.6699 21.0601 19.7198 20.1701 19.8998 19.1101L21.2298 11.1501C21.3498 10.4301 20.9499 9.40009 20.3899 8.95009L13.4599 3.41005C13.0599 3.10005 12.5299 2.94008 11.9899 2.94008Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 16.25C10.21 16.25 8.75 14.79 8.75 13C8.75 11.21 10.21 9.75 12 9.75C13.79 9.75 15.25 11.21 15.25 13C15.25 14.79 13.79 16.25 12 16.25ZM12 11.25C11.04 11.25 10.25 12.04 10.25 13C10.25 13.96 11.04 14.75 12 14.75C12.96 14.75 13.75 13.96 13.75 13C13.75 12.04 12.96 11.25 12 11.25Z"
                      fill="curentColor"
                    />
                  </svg>
                  <span className="font-bold text-md">Home</span>
                </NavLink>
                <NavLink
                  onClick={onClick}
                  to="/products"
                  end
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
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
                  <span className="font-bold text-md">Order now</span>
                </NavLink>
                <NavLink
                  onClick={onClick}
                  to="/transactions"
                  end
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.33011 15.24C7.17011 15.24 7.01011 15.19 6.87011 15.08C6.54011 14.83 6.48011 14.36 6.73011 14.03L9.11011 10.94C9.40011 10.57 9.81011 10.33 10.2801 10.27C10.7401 10.21 11.2101 10.34 11.5801 10.63L13.4101 12.07C13.4801 12.13 13.5501 12.13 13.6001 12.12C13.6401 12.12 13.7101 12.1 13.7701 12.02L16.0801 9.04001C16.3301 8.71001 16.8101 8.65001 17.1301 8.91001C17.4601 9.16001 17.5201 9.63001 17.2601 9.96001L14.9501 12.94C14.6601 13.31 14.2501 13.55 13.7801 13.6C13.3101 13.66 12.8501 13.53 12.4801 13.24L10.6501 11.8C10.5801 11.74 10.5001 11.74 10.4601 11.75C10.4201 11.75 10.3501 11.77 10.2901 11.85L7.91011 14.94C7.78011 15.14 7.56011 15.24 7.33011 15.24Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-bold text-md">Transactions</span>
                </NavLink>
                <NavLink
                  onClick={onClick}
                  to="/settings"
                  end
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 22.6298C11.3302 22.6298 10.6502 22.4798 10.1202 22.1698L4.62023 18.9998C2.38023 17.4898 2.24023 17.2598 2.24023 14.8898V9.1098C2.24023 6.7398 2.37023 6.5098 4.57023 5.0198L10.1102 1.8198C11.1602 1.2098 12.8102 1.2098 13.8602 1.8198L19.3802 4.9998C21.6202 6.5098 21.7602 6.7398 21.7602 9.1098V14.8798C21.7602 17.2498 21.6302 17.4798 19.4302 18.9698L13.8902 22.1698C13.3502 22.4798 12.6702 22.6298 12.0002 22.6298ZM12.0002 2.8698C11.5802 2.8698 11.1702 2.9498 10.8802 3.1198L5.38023 6.2998C3.75023 7.3998 3.75023 7.3998 3.75023 9.1098V14.8798C3.75023 16.5898 3.75023 16.5898 5.42023 17.7198L10.8802 20.8698C11.4702 21.2098 12.5402 21.2098 13.1302 20.8698L18.6302 17.6898C20.2502 16.5898 20.2502 16.5898 20.2502 14.8798V9.1098C20.2502 7.3998 20.2502 7.3998 18.5802 6.2698L13.1202 3.1198C12.8302 2.9498 12.4202 2.8698 12.0002 2.8698Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-bold text-md">Settings</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 group block mb-5">
            <div className="flex items-center">
              <img
                className="inline-block flex-shrink-0 h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Avatar"
              />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Name
                </h3>
                <p className="text-xs font-normal text-gray-400">
                  test@gmail.com
                </p>
              </div>
              <div
                className="flex flex-row space-x-3  text-md py-3 px-6 my-3 transition duration-200 hover:cursor-pointer"
                onClick={onLogout}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2405 22.27H15.1105C10.6705 22.27 8.5305 20.52 8.1605 16.6C8.1205 16.19 8.4205 15.82 8.8405 15.78C9.2405 15.74 9.6205 16.05 9.6605 16.46C9.9505 19.6 11.4305 20.77 15.1205 20.77H15.2505C19.3205 20.77 20.7605 19.33 20.7605 15.26V8.73998C20.7605 4.66998 19.3205 3.22998 15.2505 3.22998H15.1205C11.4105 3.22998 9.9305 4.41998 9.6605 7.61998C9.6105 8.02998 9.2605 8.33998 8.8405 8.29998C8.4205 8.26998 8.1205 7.89998 8.1505 7.48998C8.4905 3.50998 10.6405 1.72998 15.1105 1.72998H15.2405C20.1505 1.72998 22.2505 3.82998 22.2505 8.73998V15.26C22.2505 20.17 20.1505 22.27 15.2405 22.27Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.9991 12.75H3.61914C3.20914 12.75 2.86914 12.41 2.86914 12C2.86914 11.59 3.20914 11.25 3.61914 11.25H14.9991C15.4091 11.25 15.7491 11.59 15.7491 12C15.7491 12.41 15.4091 12.75 14.9991 12.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.84945 16.1001C5.65945 16.1001 5.46945 16.0301 5.31945 15.8801L1.96945 12.5301C1.67945 12.2401 1.67945 11.7601 1.96945 11.4701L5.31945 8.12009C5.60945 7.83009 6.08945 7.83009 6.37945 8.12009C6.66945 8.41009 6.66945 8.89009 6.37945 9.18009L3.55945 12.0001L6.37945 14.8201C6.66945 15.1101 6.66945 15.5901 6.37945 15.8801C6.23945 16.0301 6.03945 16.1001 5.84945 16.1001Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      <div className="relative z-0 lg:flex-grow">
        <header className="flex border-b items-center justify-between px-3 md:hidden">
          <button
            onClick={onClick}
            className="p-2 md:hidden cursor-pointer rounded-md"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                fill="currentColor"
              />
              <path
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                fill="currentColor"
              />
              <path
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span className="flex text-2xl sm:text-3xl text-neutral-50 p-4 bg-black h-10 w-10 rounded-full"></span>
        </header>
        <main className=" w-full p-5 md:p-10 mt-5 text-gray-800 min-h-screen relative z-0 overflow-x-hidden overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
    // <div className="flex w-full min-h-screen antialiased font-open bg-neutral-100 relative overflow-x-hidden">
    //   <Sidebar />
    //   <main className=" w-full p-5 md:p-10 mt-5 text-zinc-600 relative z-0">
    //     <Outlet />
    //   </main>
    // </div>
  );
};

export default MainLayout;
