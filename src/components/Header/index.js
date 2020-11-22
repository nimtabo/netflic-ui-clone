import React from "react";
import "./styles.css";
import logo from "../../imgs/Netflix_logo.png";
import profile from "../../imgs/profile.svg";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header--user">
        <img src={profile} alt="profile" />
      </div>
    </header>
  );
};
