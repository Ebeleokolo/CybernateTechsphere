import React from 'react';
import './Sidebar.css';
import sidebarcloseIcon from '../../assets/vec/sidebarcloseIcon.svg';
import greaterthanIcon from '../../assets/vec/greaterthanIcon.svg';
import sidebarmain from '../../assets/images/CybernateLogo.svg';

const Sidebar = ({isSidebarOpen, closeSidebarHandle}) => {  

  return (
    <nav id="sidebar" className={`sidebar ${isSidebarOpen ? "open" : ""} `}>
      <div className="sidebar-header">
        <img src={sidebarmain} alt="CybernateLogo" className="sidebar-cybernate-logo" />
        <button id="closeSidebar" onClick={closeSidebarHandle} className="sidebar-close-btn"><img src={sidebarcloseIcon} alt="open side bar icon" /></button>
      </div>
      <ul className="sidebar-menu">
        <li><a href="Home.html">Home</a></li>
        <li><a href="#">About Us <span className="sidebar-arrow"><img src={greaterthanIcon} alt="sidebar arrow" /></span></a></li>
        <li><a href="#">Services <span className="sidebar-arrow"><img src={greaterthanIcon} alt="sidebar arrow" /></span></a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;