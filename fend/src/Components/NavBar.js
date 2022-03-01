import React, { useEffect, useState } from "react";
import logo from "../images/pdfresizer.com-pdf-crop.svg";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    
    //to make background color the same as text color (clarity reasons)
    const trans = window.location.pathname === "/contact" ? "trans" :""

    //to navigate and go to the desired div in the same time
    const navigate = useNavigate();
    const handleNavClick = async () => {
        navigate("/");
    };
    
    //to make navbar smaller after scrolling 
    const handleScroll = () => {
        setScrolled(window.scrollY >= 50 ? "scrolled" : "")
    }
    window.addEventListener("scroll",handleScroll,true)
    const [scrolled, setScrolled] = useState("")

    return ( 
        <div className={`navbar container fixed-top ${scrolled} ${trans}`}>
            <img className="logo" src={logo} alt="IC" />

            <nav className="navigations d-flex justify-content-evenly">
                <a
                    className="navigation"
                    href="#landing"
                    onClick={handleNavClick}
                >
                    Accueil
                </a>
                <a
                    className="navigation"
                    href="#a_propos"
                    onClick={handleNavClick}
                >
                    A Propos
                </a>
                <Link className="navigation" to="/activités">
                    Activités
                </Link>
                <Link className="navigation" to="/contact">
                    Contact
                </Link>
            </nav>
            <hr />
        </div>
    );
};

export default NavBar;
