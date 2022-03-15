import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="container">
      <div className="flex pb-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">
            Hi, {user && user.user.firstname}
            <span className="font-regular text-green-500"> Good afternoon</span>
          </h1>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col gap-6">
        <div className="flex items-center p-6 gap-x-4 w-full md:w-1/4 bg-white text-neutral-600 rounded-md border">
          <div className="flex w-10 h-10 bg-green-200 rounded-md">
            <div className="flex flex-row px-2 text-green-500 text-2xl items-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8892 18.2197H6.09921C5.57921 18.2197 5.0892 18.1698 4.6492 18.0698C4.4192 18.0398 4.13921 17.9597 3.84921 17.8497C2.51921 17.3497 0.949219 16.1198 0.949219 13.0598V7.90973C0.949219 4.63973 2.82921 2.75977 6.09921 2.75977H14.8892C17.6492 2.75977 19.4292 4.07974 19.9092 6.47974C19.9992 6.91974 20.0392 7.38973 20.0392 7.90973V13.0598C20.0392 16.3498 18.1692 18.2197 14.8892 18.2197ZM6.10919 4.27979C3.64919 4.27979 2.4592 5.46975 2.4592 7.92975V13.0798C2.4592 14.8698 3.08921 15.9698 4.37921 16.4598C4.57921 16.5298 4.76922 16.5797 4.94922 16.6097C5.32922 16.6897 5.69919 16.7297 6.10919 16.7297H14.8992C17.3592 16.7297 18.5492 15.5398 18.5492 13.0798V7.92975C18.5492 7.50975 18.5192 7.13974 18.4492 6.79974C18.1092 5.09974 16.9492 4.27979 14.8992 4.27979H6.10919Z"
                  fill="currentColor"
                />
                <path
                  d="M17.8911 21.2198H9.10107C8.25107 21.2198 7.49106 21.0998 6.84106 20.8498C5.37106 20.2998 4.41105 19.1398 4.08105 17.4798C4.03105 17.2298 4.11107 16.9698 4.29107 16.7998C4.47107 16.6198 4.73107 16.5498 4.98107 16.6098C5.31107 16.6798 5.68107 16.7198 6.10107 16.7198H14.8911C17.3511 16.7198 18.5411 15.5299 18.5411 13.0699V7.91984C18.5411 7.49984 18.5111 7.12984 18.4411 6.78984C18.3911 6.53984 18.4711 6.28985 18.6411 6.10985C18.8211 5.92985 19.0711 5.84983 19.3211 5.90983C21.7211 6.39983 23.0411 8.17984 23.0411 10.9198V16.0699C23.0411 19.3499 21.1711 21.2198 17.8911 21.2198ZM5.92107 18.2198C6.24107 18.7998 6.72107 19.2099 7.38107 19.4499C7.86107 19.6299 8.44105 19.7198 9.11105 19.7198H17.9011C20.3611 19.7198 21.551 18.5299 21.551 16.0699V10.9198C21.551 9.33984 21.061 8.28985 20.051 7.73985C20.051 7.79985 20.051 7.85984 20.051 7.91984V13.0699C20.051 16.3399 18.1711 18.2198 14.9011 18.2198H6.11105C6.04105 18.2198 5.98107 18.2198 5.92107 18.2198Z"
                  fill="currentColor"
                />
                <path
                  d="M10.4994 13.8899C8.62939 13.8899 7.10938 12.3699 7.10938 10.4999C7.10938 8.62988 8.62939 7.10986 10.4994 7.10986C12.3694 7.10986 13.8894 8.62988 13.8894 10.4999C13.8894 12.3699 12.3694 13.8899 10.4994 13.8899ZM10.4994 8.60986C9.45939 8.60986 8.60938 9.45988 8.60938 10.4999C8.60938 11.5399 9.45939 12.3899 10.4994 12.3899C11.5394 12.3899 12.3894 11.5399 12.3894 10.4999C12.3894 9.45988 11.5394 8.60986 10.4994 8.60986Z"
                  fill="currentColor"
                />
                <path
                  d="M4.78125 13.4498C4.37125 13.4498 4.03125 13.1098 4.03125 12.6998V8.2998C4.03125 7.8898 4.37125 7.5498 4.78125 7.5498C5.19125 7.5498 5.53125 7.8898 5.53125 8.2998V12.6998C5.53125 13.1098 5.20125 13.4498 4.78125 13.4498Z"
                  fill="currentColor"
                />
                <path
                  d="M16.2109 13.4498C15.8009 13.4498 15.4609 13.1098 15.4609 12.6998V8.2998C15.4609 7.8898 15.8009 7.5498 16.2109 7.5498C16.6209 7.5498 16.9609 7.8898 16.9609 8.2998V12.6998C16.9609 13.1098 16.6309 13.4498 16.2109 13.4498Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-2xl font-bold">₦ 500,000</h3>
            </div>
            <p className="text-sm">Expense</p>
          </div>
        </div>
        <div className="flex flex-col p-4 w-full md:w-1/4 bg-neutral-300 text-cyan-50 rounded">
          <div className="flex items-center">
            <div className="flex">
              <h3 className="text-5xl">Text</h3>
            </div>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col p-4 w-full md:w-1/4 bg-neutral-300 text-cyan-50 rounded">
          <div className="flex items-center">
            <h3 className="text-5xl">Text</h3>
          </div>
        </div>
        <div className="flex flex-col p-4 w-full md:w-1/4 bg-neutral-300 text-cyan-50 rounded">
          <div className="flex items-center">
            <h3 className="text-5xl">Text</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
