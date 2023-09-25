import React from 'react'
import { Link } from "react-router-dom";

//demostrating the use of Link in replacement to <a> </a>

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Mark's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to='/create'>New Blog</Link>
            </div>
        </nav>
    )
}

export default NavBar;