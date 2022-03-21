import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // This is for checking if password is === to confirmPassword
  const password = useRef({});
  password.current = watch("password", "");

  // Error message I used in case registration didn't work
  const [message, setMessage] = useState("");

  // Temporary function just to test form vaildation
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Register here!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.firstName?.message}</p>
        <input
          {...register("firstName", {
            required: "Write your first name",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Enter a valid first name",
            },
          })}
          type="text"
          placeholder="First name"
          autoComplete="off"
        />
        <p>{errors.lastName?.message}</p>
        <input
          {...register("lastName", {
            required: "Write your last name",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Enter a valid first name",
            },
          })}
          type="text"
          placeholder="Last name"
          autoComplete="off"
        />
        <p>{errors.email?.message}</p>
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
        <p>{errors.password?.message}</p>
        <input
          {...register("password", {
            required: "Write your password",
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
          })}
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <p>{errors.confirmPassword?.message}</p>
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
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
