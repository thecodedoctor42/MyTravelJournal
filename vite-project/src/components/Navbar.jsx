import React from "react";
import globe from "../assets/globe-emoji.png"

function Navbar(){
    return(
        <nav>
            <img src={globe}/>
            <span>My Travel Journal</span>
        </nav>
    )
}

export default Navbar