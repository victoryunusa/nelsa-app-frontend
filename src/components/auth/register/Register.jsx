import React, { useState, useEffect} from 'react'

import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user-info')){
            navigate('/', { replace: true });
        }

    }, [])

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function signUp(){
        const user = {firstName, lastName, businessName, email, password, address}
        //console.warn(user)

        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate('/', { replace: true });

    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-md rounded-md w-3/12">
                <h3 className="text-xl font-semibold text-neutral-500 mb-10">Register your <span className="text-green-500">business</span></h3>
              
                    <div className="mt-4">
                        <div>
                            <label className="block text-neutral-500 text-sm font-semibold">Firstname</label>
                                    <input type="text" placeholder="e.g Abdullahi" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-neutral-500 text-sm font-semibold">Lastname</label>
                                    <input type="text" placeholder="e.g Madaki" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-neutral-500 text-sm font-semibold">Business Name</label>
                                    <input type="text" placeholder="Enter your business name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-neutral-500 text-sm font-semibold">Address</label>
                                    <textarea type="text" placeholder="Where your business is located" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" ></textarea>
                        </div>
                        <div className="mt-4">
                            <label className="block text-neutral-500 text-sm font-semibold">Email</label>
                                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-neutral-500 text-sm font-semibold">Password</label>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-green-500" />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button onClick={signUp} className="w-full px-6 py-3 mt-8 text-white bg-green-500 rounded hover:bg-green-600">Sign Up</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Register
