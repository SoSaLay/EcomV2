import React from "react";
import NavBar from "../navigation/navbar";
import styles from './styles.scss';

function Header(){
return (
<header className="header">
   <h1 className="headerLogo">MarketInfoZ</h1>
   <NavBar/>
</header>
);
}

export default Header