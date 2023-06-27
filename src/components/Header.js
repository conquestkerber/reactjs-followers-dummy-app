import React from "react";
import "../styles/header.css";
import "./Switch.js";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Dashboard</h1>
            <p className="header-total">List of folowers</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
