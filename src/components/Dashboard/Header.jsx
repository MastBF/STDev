import React, { useEffect, useState } from "react";
import "assets/styles/index.css";
import { Link } from "react-router-dom";
import { clearSotrage } from "../../utils/storage";
import { reqUser } from "api/user";

function Header() {
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
  const handleLogOut = () => {
    clearSotrage();
  };
  useEffect(() => {
    reqUser()
      .then((json) => {
        setUser(json.data.first_name);
        setImage(json.data.image);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <header>
      <div className="container header-container">
        <Link className="link" to={"/posts"}>
          Posts
        </Link>
        <div className="pic">
          <img
            src={image}
            alt=""
          />
          <p>{user}</p>
          <Link className="logout" to="/logIn" onClick={handleLogOut}>
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
