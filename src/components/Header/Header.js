import React from "react";
import './Header.module.css'

function Header({src , alt}) { 
    return(
        <header>
            <img src={src} alt={alt}></img>
        </header>
    )
}


export default Header;
