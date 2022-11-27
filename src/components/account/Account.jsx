import React from "react";

const Account = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h3 className="text-zinc-400 text-2xl font-semibold">Personal</h3>
      </div>
      <hr className="my-5" />
      <div className="flex flex-row space-x-5 items-center">
        <div className="bg-green-500 w-16 h-16 rounded-full"></div>
        <div>
          <h3 className="text-h28_dark_green text-2xl font-semibold">
            Victor Yunusa
          </h3>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-row md:flex-col w-1/3">
            <h3 className="text-h28_dark_green text-lg font-medium">
              Fullname
            </h3>
            <p className="mt-1 text-sm text-neutral-500 mb-2 md:mb-8">
              Customize your name
            </p>
          </div>
          <div className="flex flex-row space-x-5 w-full md:w-1/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Firstname"
                autoComplete="off"
                value="Victor"
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Firstname"
                autoComplete="off"
                value="Yunusa"
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-lg font-medium">
              Phone Number
            </h3>
            <p className="mt-1 text-sm text-neutral-500 mb-8">
              Update your phone number
            </p>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Phone number"
                autoComplete="off"
                value="08069072412"
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-10">
        <h3 className="text-zinc-400 text-2xl font-semibold">Next of kin</h3>
      </div>
      <hr className="my-5" />

      <div className="flex flex-col mt-5">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-lg font-medium">
              Fullname
            </h3>
            <p className="mt-1 text-sm text-neutral-500 mb-8">
              Customize your next of kin's name
            </p>
          </div>
          <div className="flex flex-row space-x-5 w-1/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Firstname"
                autoComplete="off"
                value="Victor"
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Firstname"
                autoComplete="off"
                value="Yunusa"
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-lg font-medium">
              Phone Number
            </h3>
            <p className="mt-1 text-sm text-neutral-500 mb-8">
              Update your next of kin's number
            </p>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <input
                type="text"
                id="email"
                placeholder="Phone number"
                autoComplete="off"
                value="08069072412"
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-md focus:outline-none focus:border-h28_dark_green"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <h3 className="text-h28_dark_green text-lg font-medium">
              Relationship
            </h3>
            <p className="mt-1 text-sm text-neutral-500 mb-8">
              How how you related?
            </p>
          </div>
          <div className="flex flex-row space-x-5 w-2/3">
            <div className="w-1/2">
              <select className="w-full px-4 py-3 text-sm text-neutral-500 placeholder-gray-600 border rounded-md focus:shadow-outline">
                <option disabled>Choose</option>
                <option value="Twitter">Sibling</option>
                <option value="Linkedin">Parent</option>
                <option value="Linkedin">Spouse</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
