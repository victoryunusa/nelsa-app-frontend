import React from "react";

const Results = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-10 lg:space-x-10">
      <div className="flex flex-col bg-zinc-50 p-5 rounded-md w-full md:w-1/2 border border-green-200">
        <h3 className="font-bold text-2xl">Affordability Score</h3>
        <p className="text-neutral-500">Your affordability badge is diamond</p>
        <div className="flex flex-row justify-between mt-10">
          <p className="text-sm text-neutral-500">20, Sept 2022</p>
          <span className="bg-h28_dark_green p-2 rounded-md hover:cursor-pointer">
            <p className="text-sm text-white">View full report</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-50 p-5 rounded-md w-full mdw-1/2 border border-green-200">
        <h3 className="font-bold text-2xl">H28 Score</h3>
        <p className="text-neutral-500">Your H28 score is 200</p>
        <div className="flex flex-row justify-between mt-10">
          <p className="text-sm text-neutral-500">20, Sept 2022</p>
          <span className="bg-h28_dark_green p-2 rounded-md hover:cursor-pointer">
            <p className="text-sm text-white">View full report</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Results;
