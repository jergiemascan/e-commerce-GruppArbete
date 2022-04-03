import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function Login(props) {
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
      const response = await Axios.post("http://localhost:3001/user/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response);
      if (response?.data?.status === "success") {
        
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          // redirect("/products");
        }, 1000);
        console.log("Welcome!");
      }
    } catch (error) {
      console.log(error);
      setLoginStatus({ isError: true, message: error.response.data.message });
    }
  };

  return (
    <Modal onClick={props.onClick}>
      <h2 className="close" onClick={props.onCloseLogin}>
        X
      </h2>
      <h2>LOGIN</h2>
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
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,10}$/,
              message: "Needs upper/lowercase and number",
            },
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
        <div>
          <button type="submit" className="btn-auth">
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Login;
