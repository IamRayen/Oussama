import React from "react";
import illus from "../illustrations/concept-of-business-employees-team-working-in-business-environment-work-culture-1862186.svg";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact container-fluid" >
                <div className="contact-information container d-flex flex-column flex-wrap">
                    <h1 className="display-2 mt-4"><strong>OUSSAMA </strong>HABIBI</h1>
                    <p className="lead fs-2 ps-4">Ingenieur Conseil Electicité et sécurité incendie</p>
                    <a  href="mailto:voltaconsulting21@gmail.com" className="text-decoration-none h2 email ms-3 ms-md-5"><i className="bi bi-envelope-fill"></i> voltaconsulting21@gmail.com</a>
                    <a href="tel:+21654342440" className="align-self-center mt-4 h3 phone"><i className="bi bi-telephone-fill"></i> +216 54 342 440</a>
                    <h2 className="align-self-center mt-4 ps-2"><i className="bi bi-geo-alt-fill"></i> 7 Rue Abou El Kacem Chabbi Manouba 2010</h2>
                </div>
                <img className="ill" src={illus} alt="pic" />
            </div>
        </div>
    );
};

export default Contact;
