import React from "react";
import "./nav.css";
const st ={
  color: 'blue'
}
export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h1>GeekFood</h1>
          
        </div>

        <div className="menu">
          <ul>
            <li><a href="#" style={st}>home</a></li>
            <li><a href="">quotas</a></li>
            <li><a href="">resturant</a></li>
            <li><a href="">food</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </div>
        <div className="get-started">
          <button>get Started</button>
        </div>
      </div>
      <div className="mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
    </nav>
  );
}
