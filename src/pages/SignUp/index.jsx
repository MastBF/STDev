import React, { useState } from "react";
import "assets/styles/index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { reqSignUp } from "api/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  name: yup.string().required().min(3).max(25),
  lastname: yup.string().required().min(3).max(25),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
function SignUp() {
  const [image, setImage] = useState("");
  const [passInvalid, setPassInvalid] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [file, setFile] = useState(
    "https://s3-alpha-sig.figma.com/img/655c/a1e8/a7c930d81f4894fb9f0754b77d83f438?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPkXkYX6NjSxRj0pjt-fmqLYuwKo~pINeXG5nHu-M5pb9a0x3dvhw-olfKLj1~TkAgs0nweaEuL9KfNNgXPlp~LnL8UnxUNocv3~08Thps0KBnSzOzIdMDzSf9ktbwauUBeyfZfAoiMd5WMEKFYbZUzx6HatkrTQyfrY4B-I8haAzDqZ4u3UYBxHxko5sdnsg1UXit0zOii58sbBe-jHoC7Z2jMPlsMMdC91535vGY1gtJimTybn7DHLojtKYn00NTt7RzKHf-CaeSsodhr5-BFM~gxWvaA38v8Z1-dUwCcTU4OfcQs8HSbZNdJUGbPKN2GaIF4XZ4CHI7aGS3NBVw__"
  );
  const [imageValid, setImageValid] = useState(true);
  const handleSignUp = async (data) => {
    try {
      const formData = new FormData();
      formData.append("first_name", data.name);
      formData.append("last_name", data.lastname);
      formData.append("password", data.password);
      formData.append("conPassword", data.conPassword);
      formData.append("email", data.email);
      formData.append("image", file);
      setPassInvalid(false);
      if (data.password !== data.conPassword) {
        setPassInvalid(true);
        return;
      }
      const response = await reqSignUp(formData);
      console.log(response);
      if (response.status === 200) navigate("/logIn");
    } catch (error) {
      console.log("Error:", error?.response?.data);
      // setImageValid(false);
    }
  };

  const handleImage = (e) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageValid(true);
  };
  return (
    <div className="fullscreen">
      <div className="signUp">
        <h2>Sign Up</h2>
        <label htmlFor="image" className="choosePic">
          <img
            src={
              image
                ? image
                : "https://s3-alpha-sig.figma.com/img/655c/a1e8/a7c930d81f4894fb9f0754b77d83f438?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8gzf-N2baZEauNRZwsQjYMSQt8xhbuFSSxCOGGv0NszF2yHW5P2NJsEvokBf-c7HeXLUtIU3312DnTrjG3CBgDMawKKmnPyoz-zgLNqQrFgoKPxbF681TR8EcKkzD8xKWEIMYwhs6e1pV~StCz1-p95vOlwNHbP3xrMqsbaBCU9bwLMX9Lybn1ITJ1iZZaQnKXlneBPzmDX6S6QMxlwWG~BVJQ2UaAXL7pYCywxBHlIwpdgZXL-LrhGm4bFI2aGkihqtVYctXOu3gVh1nLhqzCUo0TKsorDX59XwYS9RKk~sX~6STtqra6N4ORjl2k5cjyZWNGusijWN-2zlgHNAA__"
            }
          />
        </label>
        <input type="file" id="image" onChange={handleImage} value={""} />
        {imageValid ? "" : <p className="error">Image not found</p>}
        <form className="input" onSubmit={handleSubmit(handleSignUp)}>
          <div className="inputs">
            <div className="test">
              <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: "This filed is required" })}
                className={` ${!errors?.name?.message ? "" : "invlid"}`}
              />
              <p className="errorMessage">
                {errors?.name?.message
                  ? "must have more than 3 characters"
                  : ""}{" "}
              </p>
            </div>
            <div className="test">
              <input
                type="text"
                placeholder="Last name"
                {...register("lastname", {
                  required: "This filed is required",
                })}
                className={`${!errors?.lastname?.message ? "" : "invalid"}`}
              />
              <p className="errorMessage">
                {errors?.lastname?.message
                  ? "must have more than 3 characters"
                  : ""}{" "}
              </p>
            </div>
          </div>
          <div className="email1">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "This filed is required" })}
              className={`${!errors?.email?.message ? "" : "invalid"}`}
            />
          </div>

          <div className="passwords">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "This filed is required" })}
              className={`${!errors?.password?.message ? "" : "invalid"}`}
            />

            <input
              type="password"
              placeholder="Confirem Password"
              {...register("conPassword", {
                required: "This filed is required",
              })}
              className={`${!errors?.password?.message ? "" : "invalid"}`}
            />
          </div>
          <p className="errorMessage setting pass">
            {errors?.password?.message
              ? "must have more than 6 characters"
              : ""}{" "}
          </p>
          <p className={passInvalid ? "passInvalid" : "passValid"}>
            Password mismatch
          </p>

          <div className="upBtn">
            {" "}
            <input type="submit" value="Sign Up" />
          </div>
        </form>
        <p>
          Already have an account? <Link to="/logIn">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
