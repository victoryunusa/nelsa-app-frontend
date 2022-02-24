import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="py-10 mt-0">
            <Link to="/" className="flex space-x-2 px-4 items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <span className="text-4xl font-open font-semibold">foodable</span>
            </Link>
            </div>
            <div className="px-8 py-6 mt-0 text-left bg-white shadow-md rounded-md w-3/12">
                <h3 className="text-xl font-semibold text-neutral-500 mb-2">Login to your <span className="text-green-500">account</span></h3>
                <p className="mt-1 text-xs text-neutral-500 mb-8">We are delighted to have you back.</p>
                <form action="">
                    <div className="mt-4">
                        <div className="mt-4">
                            <label className="block text-neutral-500 text-sm font-semibold">Email</label>
                                    <input type="text" placeholder="Email"
                                        className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                        </div>
                        <div className="mt-4">
                            <label class="block text-neutral-500 text-sm font-semibold">Password</label>
                                    <input type="password" placeholder="Password"
                                        className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                                    <Link to="/reset" className=" text-xs text-neutral-500 hover:text-green-500">Already have an account?</Link>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="w-full px-4 py-3 mt-8 font-semibold text-white bg-green-500 rounded hover:bg-green-600">Login</button>
                        </div>
                    </div>
                </form>
                <p className="mt-4 text-xs text-neutral-500">Already have an account?</p>
            </div>
        </div>
    )
}

export default Login
