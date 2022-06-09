import React, { useState } from "react";
import logo from "../images/logo.png";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-between w-full">
      <div className="lg:flex bg-blue-100 flex-col items-center justify-center px-40 py-20 h-screen w-3/6 hidden">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col justify-center h-screen py-16 bg-blue-50 items-center space-y-8 lg:w-3/6 w-full lg:space-y-8">
        <div className="flex flex-col items-center justify-center mt-12 lg:mt-0 space-y-6">
          <img src={logo} alt="logo" className="block lg:hidden" />

          <h4 className="text-blue-300 font-body text-base text-center font-semibold">
            Welcome
          </h4>
          <h1 className="text-blue-400 font-body text-2xl font-semibold">
            Log into your account
          </h1>
        </div>
        <form
          className="w-full flex flex-col justify-center items-center space-y-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-4/5">
            <label
              className="text-blue-400 text-base font-normal font-body"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="py-2 px-4 border border-1 border-grey-100 font-body rounded focus:outline-none focus:border-blue-100 focus:ring-blue-100 focus:ring-1 transition duration-300 "
              type="email"
              id="email"
              placeholder="Enter your email address"
              errors={errors}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },
              })}
            />
            <p className="text-red-100 font-normal text-sm font-body">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col w-4/5">
            <label
              className="text-blue-400 text-base font-normal font-body "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="py-2 px-4 border border-1 border-grey-100 font-body rounded focus:outline-none focus:border-blue-100 focus:ring-blue-100 focus:ring-1 transition duration-300"
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
              })}
            />
            <p className="text-red-100 font-normal text-sm font-body">
              {errors.password?.message}
            </p>
          </div>
          <button className="bg-blue-500 w-4/5 rounded py-3 px-4 text-white text-base hover:bg-blue-400 transition duration-300">
            Login
          </button>
        </form>
        <p className="text-grey-200 text-md px-16 text-center">
          Did you forget your password?{" "}
          <span className="text-blue-300 font-semibold">Contact the admin</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
