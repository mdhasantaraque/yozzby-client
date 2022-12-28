import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    // SignUp;
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("successfully Sign Up");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center px-3">
      <div className="w-96 p-7 bg-blue-300">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="Text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-gradient-to-r from-cyan-600 to-blue-600 border-blue-500 w-full mt-4"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p>
          Already have an account &nbsp;
          <Link className="text-fuchsia-700" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline border-blue-700 w-full hover:bg-gradient-to-r from-cyan-600 to-blue-600">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
