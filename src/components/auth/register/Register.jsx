import React from 'react'

const Register = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-md w-3/12">
                <h3 className="text-xl font-semibold text-neutral-500 mb-10">Register your <span className="text-emerald-600">business</span></h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block text-neutral-700 text-sm font-semibold" for="email">Firstname</label>
                                    <input type="text" placeholder="e.g Abdullahi"
                                        className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600" />
                        </div>
                        <div className="mt-4">
                            <label class="block text-neutral-700 text-sm font-semibold">Lastname</label>
                                    <input type="text" placeholder="e.g Madaki"
                                        className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600" />
                        </div>
                        <div>
                            <label className="block text-neutral-700 text-sm font-semibold" for="email">Business Name</label>
                                    <input type="text" placeholder="Enter your business name"
                                        className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600" />
                        </div>
                        <div className="mt-4">
                            <label class="block text-neutral-700 text-sm font-semibold">Address</label>
                                    <textarea type="text" placeholder="Where your business is located"
                                        className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600" ></textarea>
                        </div>
                        <div>
                            <label className="block text-neutral-700 text-sm font-semibold" for="email">Email</label>
                                    <input type="text" placeholder="Email"
                                        className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600" />
                        </div>
                        <div className="mt-4">
                            <label class="block text-neutral-700 text-sm font-semibold">Password</label>
                                    <input type="password" placeholder="Password"
                                        className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600" />
                        </div>
                        <div class="flex items-baseline justify-between">
                            <button className="w-full px-6 py-3 mt-8 text-white bg-emerald-600 rounded-md hover:bg-emerald-900">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
