import React from "react";
import "assets/styles/index.css";
import Header from "../../components/Dashboard/Header";
import "assets/styles/index.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const image = (image) => {
    
  };
  return (
    <div className="dashboard">
      <Header />
      <Outlet />
    </div>
  );
}

export default Dashboard;
