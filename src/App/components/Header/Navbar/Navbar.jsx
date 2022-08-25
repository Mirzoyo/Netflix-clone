import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [myValue, setMyValue] = useState("");
  let navigate = useNavigate();
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
        <button onClick={() => navigate("/movies")} className="btn_navbar">
          Browse Movies
        </button>
      </div>
    </div>
  );
};

export default Navbar;
