import React, { useState } from "react";

import Account from "../components/account/Account";
import Results from "../components/account/Results";
import Security from "../components/account/Security";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(1);

  const active = "bg-black p-2.5 text-white rounded-md hover:cursor-pointer";
  const normal = "text-neutral-600 p-2.5 rounded-md hover:cursor-pointer";

  return (
    <div className="flex-1 flex-col space-y-10">
      <div className="flex flex-row space-x-3 bg-white p-3 w-full md:w-2/3 rounded-lg">
        <div
          className={activeTab === 1 ? active : normal}
          onClick={() => setActiveTab(1)}
        >
          <span className="flex flex-row items-center">
            <p className="font-semibold text-xs uppercase">Account</p>
          </span>
        </div>
        <div
          className={activeTab === 2 ? active : normal}
          onClick={() => setActiveTab(2)}
        >
          <span className="flex flex-row items-center">
            <p className="font-semibold text-xs uppercase">Security</p>
          </span>
        </div>
        <div
          className={activeTab === 3 ? active : normal}
          onClick={() => setActiveTab(3)}
        >
          <span className="flex flex-row items-center">
            <p className="font-semibold text-xs uppercase">Test Results</p>
          </span>
        </div>
      </div>
      <div className="p-10 rounded-md border bg-white">
        {activeTab === 1 ? (
          <Account />
        ) : activeTab === 2 ? (
          <Security />
        ) : (
          <Results />
        )}
      </div>
    </div>
  );
};

export default Settings;
