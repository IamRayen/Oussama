import React from "react";
import logo from "../images/pdfresizer.com-pdf-crop.svg";

const NavBar = () => {
    return (
        <div className="navbar container fixed-top">
            <img className="logo" src={logo} alt="IC" />
            
            <nav className="navigations d-flex justify-content-evenly">
                <a className="navigation" href="#landing">
                    Accueil
                </a>
                <a className="navigation" href="#a_propos">
                    A Propos
                </a>
                <a className="navigation" href="/activités">
                    Activités
                </a>
                <a className="navigation" href="/contact">
                    Contact
                </a>
            </nav>
            <hr />
        </div>
    );
};

export default NavBar;
