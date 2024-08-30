import React from "react";
import './Navbar.css';
import toIcon from '../../assets/vec/toggleIcon.svg';
import images from '../../assets/images/cybernateLogo.svg';
import bellIcon from '../../assets/vec/bellIcon.svg';
import profileIcon from '../../assets/vec/profileIcon.svg';

const Navbar = () => {
    return (  
        <nav className="header-container">
            {/* <img src={toIcon} alt="toggleIcon" className='logo' /> */}
            {/* You can use the commented line of code as a placeholder on how to link your images/vectors.
            *  I already used the import statement for the images needed on this page. */}
            
            <div id="openSidebar" className="sidebar-open-btn">
                <img src={toIcon} alt="Activate sidebar icon" className="sidebar-toggle-btn-icon" />
            </div>
            <a href="Home.html">
                <img src={images} alt="CYBERNATE website Logo" className="header-cybernate-logo" />
            </a>
            <div className="header-icons">
                <a href="#">
                    <img src={bellIcon} alt="Bell icon" className="header-bell-icon" />
                </a>
                <a href="#">
                    <img src={profileIcon} alt="Profile Icon" className="header-profile-icon" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
