import React from 'react';
import toursLogo from "../../tourslogo.png";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo"src={toursLogo} alt="Pic" />
            <ul className="links">
                <li>
                    <a href="/" className="link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="link">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="link active">
                        Tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}
