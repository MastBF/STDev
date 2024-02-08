import React from "react";
import "./LogIn.css";

function Login() {
  return (
    <div className="fullscreen">
      <div className="logIn">
        <h2>Sign Up</h2>
        <img
          src="https://s3-alpha-sig.figma.com/img/655c/a1e8/a7c930d81f4894fb9f0754b77d83f438?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPkXkYX6NjSxRj0pjt-fmqLYuwKo~pINeXG5nHu-M5pb9a0x3dvhw-olfKLj1~TkAgs0nweaEuL9KfNNgXPlp~LnL8UnxUNocv3~08Thps0KBnSzOzIdMDzSf9ktbwauUBeyfZfAoiMd5WMEKFYbZUzx6HatkrTQyfrY4B-I8haAzDqZ4u3UYBxHxko5sdnsg1UXit0zOii58sbBe-jHoC7Z2jMPlsMMdC91535vGY1gtJimTybn7DHLojtKYn00NTt7RzKHf-CaeSsodhr5-BFM~gxWvaA38v8Z1-dUwCcTU4OfcQs8HSbZNdJUGbPKN2GaIF4XZ4CHI7aGS3NBVw__"
          alt=""
        />
        <div className="emPassCheck">
          <form className="input">
            <input type="email" placeholder="Email" />
            <div>
              <input type="password" placeholder="Password" />
            </div>
          </form>
          {/* <div class="checkbox-wrapper-13">
            <input id="c1-13" type="checkbox" />
            <label for="c1-13">Remember me</label>
          </div> */}
        </div>
        <div className="upBtn">
          {" "}
          <input type="submit" value="Sign Up" />{" "}
        </div>
        <p>
          Need an account?<a>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
