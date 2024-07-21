import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom"
import cartIcon from '../../asset/shopping-cart-svgrepo-com.svg';
import userIcon from '../../asset/account-svgrepo-com.svg';
import { AuthContext } from '../../reactGlobal/AuthContext';
import CartDrawer from '../cart/cartDraw';
import styles from './styles.scss'; 


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const { user, signOut } = useContext(AuthContext);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
    const toggleCart = () => {
      setCartVisible(!cartVisible);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={cartIcon} alt="Cart" className="icon" onClick={toggleCart} />
          {user ? (
            <img src={userIcon} alt="User" className="icon" onClick={signOut} />
          ) : (
            <img src={userIcon} alt="User" className="icon" onClick={() => window.location.href='/signin'} />
          )}
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
        {cartVisible && <CartDrawer items={[]} onCheckout={() => window.location.href='/checkout'} onClose={toggleCart} />}
      </nav>
    );
  };
  
  export default NavBar;