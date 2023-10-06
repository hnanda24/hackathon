import React from "react"
import "../assets/Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar() {

    return (
        <div>
            <nav className="navbar">

                <div className="navItems">
                    <img src="yoga.jpg" className="image"></img>
                    <h1 className="heading"> ManoYog </h1>
                </div>
                <div className="navItems">

                    <h4>
                        <Link to="/">Home</Link>
                    </h4>

                    <h4>
                        <Link to="/programs">Programs</Link>
                    </h4>

                    <h4 >
                        <Link to="/game">Game</Link>
                    </h4>
                    <h4 >
                        <Link to="/videochat">Call</Link>
                    </h4>
                </div>
                <div className="navItems">

                    <h4 >
                        <button className="log">Login</button>
                    </h4>

                    <h4 >
                        <button className="reg">Sign Up</button>
                    </h4>
                </div>

            </nav>


        </div>

    )
}
