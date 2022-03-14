import React from "react";
import logo from "../images/pdfresizer.com-pdf-crop.svg";
import { useNavigate } from "react-router-dom";
import TestinmonialsCarousel from "../Components/Testinmonials-Carousel";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="LandingPage ">
            <section className="LandingScreen" id="landing">
                <div className="headers-wrapper container">
                    <div className="Row row">
                        <img
                            type="button"
                            className="logo "
                            style={{ width: "100%", height: "100px" }}
                            src={logo}
                            alt="IC"
                        />
                    </div>
                    <div className="headers row">
                        <div className="Col col col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="display-4 fw-bold ">
                                <span className="display-1">100%</span>{" "}
                                <strong>
                                    SATISFACTION <br /> FIDELITE RAPIDITE
                                </strong>
                            </h2>
                            <p className="pg p-4 mt-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem minus doloremque
                                reiciendis voluptate, debitis id animi tempore
                                optio harum ut libero earum hic vitae
                                exercitationem velit et error excepturi
                                praesentium.
                            </p>
                        </div>
                        <div className="Col d-none col-md-6 d-md-flex flex-column justify-content-around align-items-center ">
                            <button
                                onClick={() => navigate("/contact")}
                                className="contact-us rounded-pill"
                            >
                                ENVOYER UN E-MAIL
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Testimonials-wrapper px-2" id="a_propos">
                <div className="Testimonials d-flex flex-column align-items-center justify-content-center container-xl p-5">
                    <TestinmonialsCarousel />
                    <p className="test-text display-5 mt-4">TEMOIGNES</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
