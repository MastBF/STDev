import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/Middle";
// import Right from "./Right";
import './Main.css'

function Main() {
 
  return (
    <main>
      <div className="container">
        <Left />
        <Middle />
        {/* <Right /> */}
        
      </div>
    </main>
  );
}

export default Main;
