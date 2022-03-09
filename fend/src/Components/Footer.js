import React from "react";

const Footer = () => {
    return (
        <div className="footer-basic container-fluid">
            <footer className="footer container-xl">
                <div className="social container">
                    <i className="btn btn-lg bi bi-linkedin"></i>
                    <i className="btn btn-lg bi bi-skype"></i>
                    <i className=" btn btn-lg bi bi-facebook"></i>
                    <i className="btn btn-lg bi bi-twitter"></i>
                    <i className="btn btn-lg bi bi-instagram"></i>
                </div>
                <ul className="list-inline container">
                    <li className="btn list-inline-item">
                        <a href="#landing" className="link">
                            Acceuil
                        </a>
                    </li>
                    <li className="btn list-inline-item">
                        <a href="#a_propos" className="link">
                            A Propos
                        </a>
                    </li>
                    <li className="btn list-inline-item">
                        <a href="/presentation" className="link">
                            Presentation
                        </a>
                    </li>
                    <li className="btn list-inline-item">
                        <a href="/activite" className="link">
                            Domaines d'activités
                        </a>
                    </li>
                    <li className="btn list-inline-item">
                        <a href="/projet" className="link">
                            Projets
                        </a>
                    </li>
                    <li className="btn list-inline-item">
                        <a href="/contact" className="link">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="copyright-wrapper container">
                <p className="copyright">Oussama Habibi © 2022</p>
                <p className="copyright">
                    Website made by{" "}
                    <a
                        className="link00"
                        style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "black",
                        }}
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer"
                    >
                        Rayen Labidi{" "}
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
