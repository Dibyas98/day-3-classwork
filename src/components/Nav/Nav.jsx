import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h1>GeekFood</h1>
          <div className="mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li>home</li>
            <li>quotas</li>
            <li>resturant</li>
            <li>food</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="get-started">
          <button>get Started</button>
        </div>
      </div>
    </nav>
  );
}
