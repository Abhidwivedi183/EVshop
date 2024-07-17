import React from "react";
import './Navbar.css'
const Navbar  = ()=>{
    return(
        <div  className="Navbar">
<div className="navlogo">EV-olution</div>
<ul className="navmenu">
<li>Home</li>
<li>Explore</li>
<li>About</li>
<li className="navcontact">Contact</li>
</ul>
        </div>
    )
}
export default Navbar