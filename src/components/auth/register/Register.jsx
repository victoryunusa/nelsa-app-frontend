import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { register, reset } from "../../../features/auth/authSlice";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [f_name, setFirstName] = useState("");
  const [l_name, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
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
    if (isSuccess == "true") {
      navigate("/auth/verify");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      f_name,
      l_name,
      businessName,
      address,
      email,
      password,
      phone,
      bizState,
    };
    dispatch(register(userData));
  };

  return (
    <div className="flex justify-center w-full">
      <div className="p-8 text-left bg-white rounded-xl w-full md:w-3/12">
        <h3 className="text-xl font-bold text-zinc-900">Create account</h3>
        <p className="mb-5 text-xs text-zinc-400">
          Already a member?
          <Link
            to="/auth/login"
            className="text-zinc-500 font-semibold hover:text-zinc-600"
          >
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
                value={f_name}
                required={true}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="mt-4">
              <label className="block text-zinc-900 text-sm font-semibold">
                Lastname
              </label>
              <input
                type="text"
                placeholder="e.g Madaki"
                value={l_name}
                required={true}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
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
                required={true}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-500 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
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
                required={true}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-400 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              ></textarea>
            </div>
            <div className="flex flex-wrap mt-2 -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/2">
                <label className="block text-zinc-900 text-sm font-semibold">
                  Phone
                </label>
                <input
                  className="w-full h-10 px-3 text-xs text-neutral-500 border-1 border-zinc-200 rounded-md focus:shadow-outline"
                  type="text"
                  value={phone}
                  required={true}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full px-2 md:w-1/2">
                <label className="block text-zinc-900 text-sm font-semibold">
                  State
                </label>
                <select
                  className="w-full h-10 px-3 text-sm text-neutral-500 placeholder-gray-600 border-1 border-zinc-200 rounded-md focus:shadow-outline"
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
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT">FCT Abuja</option>
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
                type="email"
                placeholder="Email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-400 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
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
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-400 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-teal-900"
              />
            </div>
            <div className="form-check mt-2">
              <input
                className=" appearance-none h-4 w-4 border-1 border-zinc-200 rounded-sm bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                required={true}
              />
              <label className="form-check-label text-xs inline-block text-gray-800">
                I agree to{" "}
                <Link
                  to="/reset"
                  className=" text-xs text-neutral-500 hover:text-green-500"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="w-full px-6 py-2.5 mt-5 font-semibold text-white bg-zinc-900 rounded-md hover:bg-zinc-800"
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
