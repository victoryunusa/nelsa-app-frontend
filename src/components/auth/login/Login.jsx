import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login, reset } from "../../../features/auth/authSlice";

const Login = () => {
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
      toast.success("You have successfully logged in");
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 text-left bg-white rounded-xl border w-full md:w-3/12">
        <h3 className="text-xl font-semibold text-black mb-1">
          Login to foodable
        </h3>
        <p className="mt-1 text-sm text-neutral-500 mb-8">
          New Here?
          <Link to="/auth/register" className="text-green-500">
            <span> Create an Account</span>
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block text-black text-sm font-semibold">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-sm rounded-xl focus:outline-none focus:border-green-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-black text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border text-black text-sm rounded-xl focus:border-green-600 focus:outline-none"
              />
              <Link
                to="/reset"
                className=" text-xs text-neutral-500 hover:text-green-500"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="flex items-baseline pb-3 justify-between">
              <button
                type="submit"
                className="w-full px-4 py-3 mt-8 font-bold text-white bg-black rounded-xl hover:bg-zinc-800 "
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
