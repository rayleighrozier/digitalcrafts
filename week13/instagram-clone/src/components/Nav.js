import React from "react";
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <img src={logo} />
      <input placeholder="Search" type="text" />
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Direct</a>
        <a href="#">New</a>
        <a href="#">Explore</a>
        <a href="#">Activity</a>
        <a href="#">Profile</a>
      </div>
    </div>
  );
}
