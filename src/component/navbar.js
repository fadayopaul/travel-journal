import React from "react";

export default function Navbar() {
  return (
    <nav className="nav--body">
      <div className="nav-bar-items">
        <img src={require("../images/logo.png")} className="logo" alt="logo" />
        <p className="logo--text">my travel journal</p>
      </div>
    </nav>
  );
}
