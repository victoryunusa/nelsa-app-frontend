import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { verify, reset } from "../../../features/auth/authSlice";

const Verify = () => {
  const [code, setCode] = useState("");

  const { user_email } = JSON.parse(localStorage.getItem("user_email"));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("You email has been verified successfully");
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user_email;
    const userData = {
      email,
      code,
    };
    dispatch(verify(userData));
  };

  return (
    <div className="flex justify-center w-full">
      <div className="p-8 text-left bg-white rounded-xl border w-full md:w-3/12">
        <h3 className="text-lg font-bold text-black">
          Please check your email
        </h3>
        <p className="text-xs text-zinc-500 mb-5">
          We've sent a code to your email
          <span className="text-zinc-800 font-semibold">
            {" "}
            {user_email ? user_email : null}
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="">
              <input
                type="text"
                id="email"
                placeholder="Enter your code"
                autoComplete="off"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="w-full px-4 py-3 mt-1 border-2 border-zinc-300 text-neutral-500 text-sm rounded-lg focus:outline-none focus:border-zinc-500"
              />
              <span className="text-xs text-zinc-500">
                Didn't get the code{" "}
                <Link to="/reset" className="text-zinc-600 hover:text-zinc-700">
                  Click to resend?
                </Link>
              </span>
            </div>
            <div className="flex items-baseline pb-3 justify-between">
              <button
                type="submit"
                className="w-full px-4 py-3 mt-5 font-bold text-white bg-black rounded-lg hover:bg-zinc-800 "
              >
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
