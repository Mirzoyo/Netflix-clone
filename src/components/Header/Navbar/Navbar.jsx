import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [myValue, setMyValue] = useState("");
  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt=""
        className="logo_navbar"
      />
      <div className="inputs">
        <div className="dropdown">
          <i class="fa-solid fa-globe"></i>
          <select
            onChange={(e) => setMyValue(e.target.value)}
            defaultValue={myValue}
          >
            <option>English</option>
            <option>Russian</option>
          </select>
        </div>
        <button className="btn_navbar">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
