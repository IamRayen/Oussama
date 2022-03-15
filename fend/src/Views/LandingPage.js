import React from "react";
import logo from "../images/pdfresizer.com-pdf-crop.svg";
import { useNavigate } from "react-router-dom";
import TestinmonialsCarousel from "../Components/Testinmonials-Carousel";

const LandingPage = () => {
    const navigate = useNavigate();

    const Testimonials = [
        {
            key: "1",
            image: "https://source.unsplash.com/200x200/?technologie",
            alt: "first",
            title: "First",
            comment: "Nulla vitae elit libero, a pharetra augue mollisinterdum",
        },
        {
            key: "2",
            image: "https://source.unsplash.com/200x200/?race",
            alt: "second",
            title: "Second",
            comment: "Nulla vitae elit libero, a pharetra augue mollisinterdum",
        },
        {
            key: "3",
            image: "https://source.unsplash.com/200x200/?cars",
            alt: "third",
            title: "Third",
            comment: "Nulla vitae elit libero, a pharetra augue mollisinterdum",
        },
    ];

    return (
        <div className="LandingPage ">
            <section className="LandingScreen " id="landing">
                <div className="headers-wrapper container">
                    <div className="Row row">
                        <img
                            type="button"
                            className="logo"
                            style={{ width: "100%" }}
                            src={logo}
                            alt="IC"
                        />
                    </div>
                    <div className="headers d-flex  row">
                        <div className="Coll col d-flex flex-column align-items-center justify-content-center ">
                            <h2 className="display-5 display-md-4 fw-bold">
                                <span className="display-3 display-md-1 ">
                                    100%
                                </span>{" "}
                                <strong>
                                    SATISFACTION, <br /> FIDELITE ET RAPIDITE
                                </strong>
                            </h2>
                            <p className="pg p-4 mt-5">
                                <strong>Volta Consulting</strong> est un bureau
                                d’études techniques spécialisé dans la
                                réalisation des études d’exécution aux services
                                des installateur électriques.
                            </p>
                        </div>
                        <div className="Coll d-flex flex-column justify-content-start align-items-center ">
                            <h3 className="display-6 d-none d-md-block contact-us-call  mt-5">
                                Embauchez Nous Maintenant
                            </h3>
                            <button
                                onClick={() => navigate("/contact")}
                                className="contact-us rounded-pill mb-5 mt-3"
                            >
                                ENVOYER UN E-MAIL
                            </button>
                            <h3 className="Check-tem mt-5 ">
                                Pas sur? consultez nos{" "}
                                <span className="p-2">Témoignages</span>
                                <i className="bi bi-arrow-down"></i>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Testimonials-wrapper px-2" id="a_propos">
                <div className="Testimonials d-flex flex-column align-items-center justify-content-center container-fluid  p-md-5 ">
                    <TestinmonialsCarousel Testimonials={Testimonials} />
                    <div className="test-container d-md-none">
                        {Testimonials.map((el) => {
                            return (
                                <div
                                    key={el.key}
                                    className=" tests mb-4 p-2  d-flex"
                                >
                                    <img
                                        src={el.image}
                                        alt={el.alt}
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            borderRadius:"10px"
                                        }}
                                    />
                                    <div className="tests-text ms-2">
                                        <h1>{el.title}</h1>
                                        <h5>"{el.comment}"</h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <p className="test-text d-none d-md-block display-5 ">
                        TEMOIGNAGES
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
