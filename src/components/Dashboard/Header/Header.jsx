import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <Link className="link">Posts</Link>
        <div className="pic">
          <img
            src="https://s3-alpha-sig.figma.com/img/bf0b/50a7/3fb78989e9d3859c3e5fe6b4dc0af420?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQJHfm3l8TuvdTuJsj8BHwjnhKoHutNKOqq20ONvZkM0qCarFpiAUGd9SOymLEqpuNkH0T3zonyFo7GUNWo8tjhYUAqwikMeZelgNzFWCxL3vzaAKgcxzw4xMvoHa3Ki5je7UmwFKLTPGoZSkcVRuWPBz1sRDuziPZsmtJdNMLGteq9Jp6m8ELlJEBUDbBIybVApAX28MfgErvIqnf0l1TTypjKP9Q9FupKl-ZhtdfnSt1nULY1M1q3sUuxG~cqi0cQGqTSWFWlhPixQt-K3CAWa606wxgbqVMTYuKee8cmgQFXDSlgxhLijc0p6qNDEbWckTaWykLC7O9cMckj3yQ__"
            alt=""
          />
          <p>Adele Fendi</p>
          <Link className="logout" to="/logIn">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
