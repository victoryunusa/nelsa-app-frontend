import React from "react";

const Security = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h3 className="text-zinc-400 text-2xl font-semibold">
          Personal information
        </h3>
      </div>
      <hr className="my-5" />

      <div className="flex flex-col mt-10">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">
              Phone Number
            </h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2 flex flex-row items-center">
              <h3 className="text-zinc-400 text-md">08069072412</h3>
              <span className="hover:cursor-pointer">
                <p className="mt-1 text-emerald-600 ml-3">Edit</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-10">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">Email</h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2 flex flex-row items-center">
              <h3 className="text-zinc-400 text-md">victor@h28.io</h3>
              <span className="hover:cursor-pointer">
                <p className="mt-1 text-emerald-600 ml-3">Edit</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-10">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">BVN</h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2 flex flex-row items-center">
              <h3 className="text-zinc-400 text-md">22334488889</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-10">
        <h3 className="text-zinc-400 text-2xl font-semibold">
          Change Password
        </h3>
      </div>
      <hr className="my-5" />

      <div className="flex flex-col mt-5 space-y-10">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">
              Current Password
            </h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Current Password"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">
              New Password
            </h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="New Password"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">
              Confirm Password
            </h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Confirm Password"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10">
        <h3 className="text-zinc-400 text-2xl font-semibold">Change Pin</h3>
      </div>
      <hr className="my-5" />

      <div className="flex flex-col mt-5 space-y-10">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">
              Current Pin
            </h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Current Pin"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">New Pin</h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="New Pin"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-xl font-medium">
              Confirm Pin
            </h3>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Confirm Pin"
                autoComplete="off"
                required
                className="w-full px-4 py-3 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
