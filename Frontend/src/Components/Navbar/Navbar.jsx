import React from 'react';
import './Navbar.css';
import toIcon from '../../assets/vec/toggleIcon.svg';
import images from '../../assets/images/cybernateLogo.svg';
import bellIcon from '../../assets/vec/bellIcon.svg';
import profileIcon from '../../assets/vec/profileIcon.svg';

const Navbar = ({openSidebarHandle}) => {
    return (
        <nav className="navbar-container">
            <div id="openSidebar" onClick={openSidebarHandle} className="sidebar-open-btn">
                <img src={toIcon} alt="Activate sidebar icon" className="sidebar-toggle-btn-icon" />
            </div>
            <a href="#">
                <img src={images} alt="CYBERNATE website Logo" className="navbar-cybernate-logo" />
            </a>
            <div className="navbar-icons">
                <a href="#"> <img src={bellIcon}  alt="Bell icon" className="navbar-bell-icon" /> </a>
                <a href="#"> <img src={profileIcon} alt="Profile Icon" className="navbar-profile-icon" /> </a>
            </div>
        </nav>
    );
}

export default Navbar;
