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
  const [city, setCity] = useState("");
  const [bizState, setBizState] = useState("");

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
      city,
      bizState,
    };
    dispatch(register(userData));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-8 py-6 mt-4 text-left bg-white border rounded-md w-full md:w-3/12">
        <h3 className="text-xl font-semibold text-zinc-900">
          Register your <span className="text-green-500">business</span>
        </h3>
        <p className="mt-2 mb-8 text-xs text-zinc-900">
          Already have an account?
          <Link to="/auth/login" className="text-green-500">
            <span> Login</span>
          </Link>
        </p>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-zinc-900 text-sm font-semibold">
                Firstname
              </label>
              <input
                type="text"
                placeholder="e.g Abdullahi"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-zinc-900 text-sm font-semibold">
                Lastname
              </label>
              <input
                type="text"
                placeholder="e.g Madaki"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-zinc-900 text-sm font-semibold">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Enter your business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-zinc-900 text-sm font-semibold">
                Address
              </label>
              <textarea
                type="text"
                placeholder="Where your business is located"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              ></textarea>
            </div>
            <div className="flex flex-wrap mt-2 -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/2">
                <label className="block text-zinc-900 text-sm font-semibold">
                  City
                </label>
                <input
                  className="w-full h-10 px-3 text-xs text-neutral-500 border rounded-md focus:shadow-outline"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-full px-2 md:w-1/2">
                <label className="block text-zinc-900 text-sm font-semibold">
                  State
                </label>
                <select
                  className="w-full h-10 px-3 text-xs text-neutral-500 placeholder-gray-600 border rounded-md focus:shadow-outline"
                  onChange={(e) => setBizState(e.target.value)}
                  value={bizState}
                >
                  <option disabled>--Select State--</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross Rive">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT" selected="selected">
                    FCT Abuja
                  </option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-zinc-900 text-sm font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-zinc-900 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="flex items-baseline pb-3 justify-between">
              <button
                type="submit"
                className="w-full px-6 py-2.5 mt-6 text-white bg-zinc-900 rounded-md hover:bg-zinc-800"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
