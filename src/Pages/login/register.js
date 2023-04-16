import React from "react";
import { TextField } from "@mui/material";
import { registerApi } from "../../api/post";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigation = useNavigate();
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
    username: "",
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
      const data = await registerApi(userData);
      if (data) {
        toast(`Sucessfully Register ${userData.username}`);
        navigation("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-row justify-center shadow-md ">
      <form onSubmit={submitHandler}>
        <div className="mb-6 mt-5 font-bold">REGISTER</div>
        <div className="mb-6">
          <div>
            <label htmlFor="">Full Name</label>
          </div>
          <TextField
            id="outlined-basic"
            placeholder="full Name"
            variant="outlined"
            onChange={(e) => changeHandler("username", e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="">Email</label>
          </div>
          <TextField
            id="outlined-basic"
            placeholder="Email"
            type="email"
            variant="outlined"
            onChange={(e) => changeHandler("email", e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="">Password</label>
          </div>
          <TextField
            id="outlined-basic"
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
