import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom"
import userIcon from '../../asset/account-svgrepo-com.svg';
import styles from './styles.scss'; 


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
  
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
    const toggleCart = () => {
      setCartVisible(!cartVisible);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-left">
        <Link to="/login">
            <img src={userIcon} alt="User" className="icon" />
          </Link>
        </div>
        <div className={`navbar-links ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" className="navLink">Home</Link></li>
            <li><Link to="/meetUs" className="navLink">Mission</Link></li>
            <li><Link to="/solutions" className="navLink">Solutions</Link></li>
            <li><Link to="/contact" className="navLink">Contact</Link></li>
          </ul>
        </div>
        <div className="brandName">
          <Link to="/">MarketInfoZ</Link>
        </div>
        <div className="toggle" onClick={toggleMenu}>
          <div className="toggle-button"></div>
          <div className="toggle-button"></div>
          <div className="toggle-button"></div>
        </div>

      </nav>
    );
  };
  
  export default NavBar;