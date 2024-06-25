// src/Components/Header/Header.jsx

import React from 'react';
import logo from "../../assets/logo/long-logo.png";
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';


function Header() {
  

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo"/>
      
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
                <div className="search-icon"><SearchIcon className='search-icon'></SearchIcon></div>
      </div>

      <div className="profile-container">
        <div className="airbnb-home">Airbnb your Home</div>
        <div className="airbnb-home"><LanguageIcon sx={{fontSize:"1.2rem"}}></LanguageIcon></div>
        <div className='profile-div'><BasicMenu /></div>
      </div> 
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
