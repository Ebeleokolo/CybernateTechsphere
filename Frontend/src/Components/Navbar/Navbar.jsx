import React from "react";
import "./Navbar.css";
import toIcon from "../../assets/vec/toggleIcon.svg";
import images from "../../assets/images/cybernateLogo.svg";
import bellIcon from "../../assets/vec/bellIcon.svg";
import profileIcon from "../../assets/vec/profileIcon.svg";

const Navbar = ({ openSidebarHanle }) => {
  return (
    <nav className="navbar-container pt-10">
      <div className="navbar-left-container">
        <div
          id="openSidebar"
          onClick={openSidebarHanle}
          className="sidebar-open-btn"
        >
          <img src={toIcon} alt="Activate sidebar icon" />
        </div>
        <a href="#" className="navbar-cybernate-logo">
          <img src={images} alt="CYBERNATE website Logo" />
        </a>
        <div className="navbar-links">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Solutions</a>
          <a href="">FAQ</a>
          <a href="">Contact Us</a>
        </div>
      </div>

      <div className="navbar-icons">
        <a href="#" className="navbar-bell-icon">
          <img src={bellIcon} alt="Bell icon" />
        </a>
        <a href="#" className="navbar-profile-icon">
          <img src={profileIcon} alt="Profile Icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
