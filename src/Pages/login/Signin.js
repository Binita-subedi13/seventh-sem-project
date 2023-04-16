import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";

import { loginApi } from "./../../api/post";

const Signin = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const changeHandler = (field, value) => {
    const newState = { ...userData };
    newState[field] = value;
    setUserData(newState);
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(userData);
      const data = await loginApi(userData);
      if (data) {
        const token = data.data.token;
        toast(`Sucessfully Log In`);
        localStorage.setItem("token", token);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center ">
        <form onSubmit={submitHandler}>
          <div className="mb-6 mt-5 font-bold">SIGN IN</div>
          <div className="mb-6">
            <div>
              <label htmlFor="">Email</label>
            </div>
            <TextField
              id="outlined-basic"
              placeholder="Email"
              variant="outlined"
              type="email"
              onChange={(e) => changeHandler("email", e.target.value)}
            />
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="">Password</label>
            </div>
            <TextField
              id="outlined-basic"
              type="password"
              placeholder="Password"
              variant="outlined"
              onChange={(e) => changeHandler("password", e.target.value)}
            />
          </div>

          <div class="text-center lg:text-left pb-5 ">
            <button
              type="submit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>

            <p class="text-sm font-semibold mt-2 pt-1 mb-0 ">
              Don't have an account?
              <Link to="/register">
                <p class="text-red-600 hover:text-red-700 transition duration-200 ">
                  Register
                </p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
