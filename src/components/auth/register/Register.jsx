import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { register, reset } from "../../../features/auth/authSlice";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      businessName,
      address,
      email,
      password,
    };
    dispatch(register(userData));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-md rounded-md w-full md:w-3/12">
        <h3 className="text-xl font-semibold text-neutral-500">
          Register your <span className="text-teal-900">business</span>
        </h3>
        <p className="mt-1 text-xs text-neutral-500 mb-8">
          We are delighted to have you back.
        </p>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-neutral-500 text-sm font-semibold">
                Firstname
              </label>
              <input
                type="text"
                placeholder="e.g Abdullahi"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
                Lastname
              </label>
              <input
                type="text"
                placeholder="e.g Madaki"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
                Address
              </label>
              <textarea
                type="text"
                placeholder="Where your business is located"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-900"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="w-full px-6 py-3 mt-8 text-white bg-teal-900 rounded hover:bg-green-600"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-8 mb-4 text-xs text-neutral-500">
              Already have an account?
              <Link to="/auth/login" className="text-teal-800">
                <span> Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
