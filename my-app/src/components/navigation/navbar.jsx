import React from "react";
import {Link} from "react-router-dom"
import styles from "./styles.scss";



const NavBar = () => {

return (
<nav className={styles.navbar}>
<ul> 
    <li> <Link to="/">Home</Link></li>
    <li> <Link to="/meetUs">Meet Us</Link></li>
    <li> <Link to="/solutions">Research Solutions</Link></li>
    <li> <Link to="/contact">Contact</Link></li>
    <li> <Link to="/ResourceCenter">Resource Center</Link></li>

</ul>

</nav>
)

}

export default NavBar;