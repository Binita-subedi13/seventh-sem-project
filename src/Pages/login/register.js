import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myfun = () => {};
  return (
    <div className="flex flex-row justify-center shadow-md ">
      <form onSubmit={handleSubmit(myfun)} action="">
        <div className="mb-6 mt-5 font-bold">REGISTER</div>
        <div className="mb-6">
          <div>
            <label htmlFor="">First Name</label>
          </div>
          <TextField
            id="outlined-basic"
            placeholder="First Name"
            variant="outlined"
            {...register("FirstName", { required: true })}
          />
          {errors.FirstName && errors.FirstName.type == "required" && (
            <p className="text-red-600">Firstname required</p>
          )}
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="">Last Name</label>
          </div>
          <TextField
            id="outlined-basic"
            placeholder="Last Name"
            variant="outlined"
            {...register("LastName", { required: true })}
          />
          {errors.LastName && errors.LastName.type == "required" && (
            <p className="text-red-600">Lastname required</p>
          )}
        </div>
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
              minLength: {
                value: 7,
                message: "Password must be of atleast 7 characters",
              },
            })}
          />
          {errors.Password && (
            <p className="text-red-500"> {errors.Password.message} </p>
          )}
        </div>

        <div class="text-center lg:text-left pb-5 ">
          <button
            type="submit"
            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
