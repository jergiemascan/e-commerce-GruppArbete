import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
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
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await Axios.post("http://localhost:3001/user/login", {
        email: data.email,
        password: data.password,
      });
      if (response?.data?.status === "success") {
        localStorage.setItem("fullName", response.data.fullName);
        localStorage.setItem("userId", response.data.user);
      } else {
        setMessage("Someting went wrong :(");
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
          <button
            onClick={localStorage.userId && props.onCloseLogin()}
            type="submit"
            className="btn-auth"
          >
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Login;
