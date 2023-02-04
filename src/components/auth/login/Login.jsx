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
    if (isSuccess == true) {
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
    <div className="flex justify-center w-full">
      <div className="p-8 text-left bg-white rounded-xl w-full md:w-3/12">
        <h3 className="text-xl font-bold text-black">Hello again 👋</h3>
        <p className=" text-xs text-zinc-400 mb-5">
          New here?
          <Link to="/auth/register" className="text-zinc-500">
            <span> Sign up</span>
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
                placeholder="e.g 090877777"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-neutral-500 text-sm rounded-lg focus:outline-none focus:border-zinc-500"
              />
            </div>
            <div className="mt-4">
              <div className="flex flex-row justify-between items-center">
                <label className="block text-black text-sm font-semibold">
                  Password
                </label>
                <Link
                  to="/reset"
                  className=" text-xs text-neutral-500 hover:text-zinc-700 "
                >
                  Forgot your password?
                </Link>
              </div>

              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border-1 border-zinc-200 text-black text-sm rounded-lg focus:border-zinc-500 focus:outline-none"
              />
            </div>
            <div className="flex items-baseline pb-3 justify-between mt-8">
              <button
                type="submit"
                className="w-full px-4 py-3  font-bold text-white bg-black rounded-lg hover:bg-zinc-800 "
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
