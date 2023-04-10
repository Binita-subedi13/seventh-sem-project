import React from "react";
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myfun = () => {};
  return (
    <>
      <div className="flex flex-row justify-center ">
        <form onSubmit={handleSubmit(myfun)} action="">
          <div className="mb-6 mt-5 font-bold">SIGN IN</div>
          <div className="mb-6">
            <div>
              <label htmlFor="">Email</label>
            </div>
            <TextField
              id="outlined-basic"
              placeholder="Email"
              variant="outlined"
              {...register("Email", {
                required: {
                  value: true,
                  message: "Email required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid Email Address",
                },
              })}
            />
            {errors.Email && (
              <p className="text-red-500"> {errors.Email.message} </p>
            )}
          </div>
          <div className="mb-6">
            <div>
              <label htmlFor="">Password</label>
            </div>
            <TextField
              id="outlined-basic"
              placeholder="Password"
              variant="outlined"
              {...register("Password", {
                required: {
                  value: true,
                  message: "Password required",
                },
              })}
            />
            {errors.Password && (
              <p className="text-red-500"> {errors.Password.message} </p>
            )}
          </div>
          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id=""
              />
              
            </div>
           
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

              <Link to="/register"> <a class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                  Register
                </a></Link>
               
              
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
