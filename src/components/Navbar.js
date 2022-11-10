
import React, { useState }from "react";
import "../components/Styles/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 

        <div className="navbar">
            <span className="nav-logo">TastetheWaste</span>

        <div className={`nav-items ${isOpen && "open"}`}>
           <a href="/buyproducts">KÖP</a>
           <a href="/sellproducts">SÄLJ</a>
           <a href="/">STARTSIDA</a>

</div>
<div className={`nav-toggle ${isOpen && "open"}`}
 onClick={() => setIsOpen(!isOpen)}>
    <div className="bar"></div>

</div>


        </div>
     );
}
 
export default Navbar;