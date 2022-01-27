import React from 'react'

const Dashboard = () => {
    return (
        <div className="container">
            <div className="flex pb-20">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold ">Hi, Victor! <span className="font-regular text-green-500">Good afternoon</span></h1>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex items-center p-6 gap-x-4 w-1/4 bg-white text-neutral-600 rounded-md border">
                    <div className="flex w-10 h-10 bg-green-200 rounded-md">
                        <div className="flex flex-row px-2 text-green-600 text-2xl items-center">
                            <i className='bx bx-wallet-alt' ></i>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <div>
                            <h3 className="text-2xl font-bold">$500,000</h3>
                        </div>
                        <p>Hello new revenue</p>
                    </div>
                </div>
                <div className="flex flex-col p-4 w-1/4 bg-neutral-300 text-cyan-50 rounded">
                    <div className="flex items-center">
                        <div className="flex">
                            <h3 className="text-5xl"></h3>
                        </div>
                        <p></p>
                    </div>
                </div>
                <div className="flex flex-col p-4 w-1/4 bg-neutral-300 text-cyan-50 rounded">
                    <div className="flex items-center">
                        <h3 className="text-5xl"></h3>
                    </div>
                </div>
                <div className="flex flex-col p-4 w-1/4 bg-neutral-300 text-cyan-50 rounded">
                    <div className="flex items-center">
                        <h3 className="text-5xl"></h3>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Dashboard
