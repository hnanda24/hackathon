import React from "react"
import "../assets/Navbar.css"

export default function Navbar(){

    return (
        <div>
            <nav className="navbar">

                <img src="yoga.jpg" className="image"></img>

                <h1 className="heading"> ManoYog </h1>

                <h4>
                    <a href="">Home</a>
                </h4>

                <h4>
                    <a href="">Programs</a>
                </h4>

                <h4 className="leftItems">
                    <a href="">Download App</a>
                </h4>

                    <h4 className="rightNavItems">
                        <button className="log">Login</button>
                    </h4>

                    <h4 className="rightNavItems">
                        <button className="reg">Sign Up</button>
                    </h4>

            </nav>


        </div>
        
    )
}
