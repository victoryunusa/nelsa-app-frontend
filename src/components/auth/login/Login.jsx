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
      navigate("/");
      toast.success("You have successfully logged in");
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
      <div className="px-8 py-6 mt-0 text-left bg-white shadow-md rounded-md w-full md:w-3/12">
        <h3 className="text-xl font-semibold text-neutral-500 mb-2">
          Login to your <span className="text-teal-800">account</span>
        </h3>
        <p className="mt-1 text-xs text-neutral-500 mb-8">
          We are delighted to have you back.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
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
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-800"
              />
            </div>
            <div className="mt-4">
              <label className="block text-neutral-500 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border text-neutral-500 text-xs rounded focus:outline-none focus:ring-1 focus:ring-teal-800"
              />
              <Link
                to="/reset"
                className=" text-xs text-neutral-500 hover:text-teal-800"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="w-full px-4 py-3 mt-8 font-semibold text-white bg-teal-800 rounded hover:bg-green-600"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="mt-8 mb-4 text-xs text-neutral-500">
          Don't have an account?
          <Link to="/auth/register" className="text-teal-800">
            <span> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
