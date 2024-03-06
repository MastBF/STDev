import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (event) => {};

  return (
    <div className="fullscreen">
      <div className="signUp">
        <h2>Sign Up</h2>

        <img
          src="https://s3-alpha-sig.figma.com/img/655c/a1e8/a7c930d81f4894fb9f0754b77d83f438?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPkXkYX6NjSxRj0pjt-fmqLYuwKo~pINeXG5nHu-M5pb9a0x3dvhw-olfKLj1~TkAgs0nweaEuL9KfNNgXPlp~LnL8UnxUNocv3~08Thps0KBnSzOzIdMDzSf9ktbwauUBeyfZfAoiMd5WMEKFYbZUzx6HatkrTQyfrY4B-I8haAzDqZ4u3UYBxHxko5sdnsg1UXit0zOii58sbBe-jHoC7Z2jMPlsMMdC91535vGY1gtJimTybn7DHLojtKYn00NTt7RzKHf-CaeSsodhr5-BFM~gxWvaA38v8Z1-dUwCcTU4OfcQs8HSbZNdJUGbPKN2GaIF4XZ4CHI7aGS3NBVw__"
          alt=""
        />

        <form className="input">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleName}
              className={`name ${isValid ? "Invalid" : ""}`}
            />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="email1">
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirem Password" />
          </div>
        </form>
        <div className="upBtn">
          {" "}
          <input type="submit" value="Sign Up" onClick={handleSubmit} />
        </div>
        <p>
          Already have an account? <Link to="/logIn">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
