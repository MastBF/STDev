import React from "react";
import "../Header/Header.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import "./index.css";
import Create from "../Create/Create";
import { Outlet } from "react-router-dom";

function Dashboard() {

  return (
    <div className="dashboard">
      <Header />
      <Outlet />
      

    </div>
  );
}

export default Dashboard;
