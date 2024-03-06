import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken, setAccessToken, setRefreshToken } from "utils/storage";
import { reqSignIn } from "api/auth";
import "assets/styles/index.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "store/Auth/actions";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

function Login() {
  const dispatch = useDispatch();
  const registrationState = useSelector((state) => state.registration);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      const response = await reqSignIn(formData);
      if (response.status === 200) {
        const responseData = response.data;
        setAccessToken(responseData.token.access);
        setRefreshToken(responseData.token.refresh);
        navigate("/posts");
        dispatch(loginSuccess(response));
        setAccessToken(registrationState.user.data.access);
        setRefreshToken(registrationState.user.data.refresh);
      }
    } catch (er) {
      console.error("Error:", er);
      dispatch(loginFailure(er));
    }
  };
  // console.log('response:',registrationState.user || registrationState.error);
  return (
    <div className="fullscreen">
      <div className="logIn">
        <h2>Sign In</h2>

        <form className="input" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "This filed is required" })}
            className={`${!errors?.email?.message ? "" : "invalid"}`}
          />
         
            {errors?.email && <p>{errors?.email?.message || "Error"}</p>}{" "}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "This filed is required" })}
            className={`${!errors?.password?.message ? "" : "invalid"}`}
          />
            {" "}
            {errors?.password && (
              <p>{errors?.password?.message || "Error"}</p>
            )}{" "}

          <div className="upBtn">
            {" "}
            <input type="submit" value="Sign In" />{" "}
          </div>
        </form>

        <p>
          Need an account?<Link to="/signUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
