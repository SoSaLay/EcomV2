import React from "react";
import {Link} from "react-router-dom"
import styles from "./styles.scss";



const NavBar = () => {

return (
<nav className="nav">

   <Link to="/" className="navLink">Home</Link>
    <Link to="/meetUs" className="navLink">Meet Us</Link>
    <Link to="/solutions" className="navLink">Research Solutions</Link>
    <Link to="/contact" className="navLink">Contact</Link>
    <Link to="/ResourceCenter" className="navLink">Resource Center</Link>

</nav>
)

}

export default NavBar;