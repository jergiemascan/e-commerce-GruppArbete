import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginStatus, setLoginStatus] = useState({
    isError: false,
    message: "",
  });
  const redirect = useNavigate();

  // Temporary function just to test form vaildation
  const onSubmit = async (data) => {
    try {
      const response = await Axios.post("http://localhost:3001/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response);
      if (response?.data?.status === "success") {
        localStorage.setItem("isAuthenticated", true);
        setTimeout(() => {
          redirect("/products");
        }, 1000);
        console.log("Welcome!");
      }
    } catch (error) {
      console.log(error);
      setLoginStatus({ isError: true, message: error.response.data.message });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="errors">{errors.email?.message}</p>
        <input
          {...register("email", {
            required: "Write your email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Enter a valid email",
            },
          })}
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        <p className="errors">{errors.password?.message}</p>
        <input
          {...register("password", {
            required: "Write your password",
            minLength: {
              value: 5,
              message: "Minimum length is 5.",
            },
            maxLength: {
              value: 10,
              message: "Maximum length is 10",
            },
            // pattern: {
            //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,10}$/,
            //   message: "Needs upper/lowercase and number",
            // },
          })}
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        {loginStatus.isError && (
          <div>
            <strong style={{ color: "red" }}>{loginStatus.message}</strong>
          </div>
        )}
        {/* <p>{errors.confirmPassword?.message}</p>
        <input
          {...register("confirmPassword", {
            required: "Confirm your password",
            minLength: {
              value: 5,
              message: "Minimum length is 5.",
            },
            maxLength: {
              value: 10,
              message: "Maximum length is 5",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,10}$/,
              message: "Needs upper/lowercase and number",
            },
            validate: (isMatch) =>
              isMatch === password.current || "The passwords do not match",
          })}
          type="password"
          placeholder="Confirm password"
          autoComplete="off"
        /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
