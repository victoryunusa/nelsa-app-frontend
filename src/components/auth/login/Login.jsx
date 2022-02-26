import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const BaseUrl = process.env.REACT_APP_BASE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/", { replace: true });
    }
  }, []);

  async function login() {
    const user = { email, password };
    //console.warn(user)

    const result = await fetch(`${BaseUrl}/api/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (result.ok) {
      let test = await result.json();
      localStorage.setItem("user-info", JSON.stringify(test));
      navigate("/", { replace: true });
    } else {
      let test = await result.json();
      localStorage.setItem("login-error", JSON.stringify(test));
      navigate("/auth/login", { replace: true });
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-8 py-6 mt-0 text-left bg-white shadow-md rounded-md w-3/12">
        <h3 className="text-xl font-semibold text-neutral-500 mb-2">
          Login to your <span className="text-teal-800">account</span>
        </h3>
        <p className="mt-1 text-xs text-neutral-500 mb-8">
          We are delighted to have you back.
        </p>
        <div className="mt-4">
          <div className="mt-4">
            <label className="block text-neutral-500 text-sm font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={login}
              className="w-full px-4 py-3 mt-8 font-semibold text-white bg-teal-800 rounded hover:bg-green-600"
            >
              Login
            </button>
          </div>
        </div>
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
