import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header_section">
      <Navbar />
      <div className="main_page">
        <span>Unlimited movies, TV</span>
        <span>shows, and more.</span>
        <span>Watch anywhere. Cancel anytime.</span>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="email">
          <input type="text" placeholder="Email address" />
          <button className="btn_email">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
