import React from "react";
import { Form } from "react-bootstrap";
import logo from "../images/pdfresizer.com-pdf-crop.svg";

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <section className="LandingScreen" id="landing">
                <div className="headers-wrapper container">
                    <div className="headers row">
                        <div className="Col col-6 d-flex align-items-center justify-content-center">
                            <h2 className="display-2 fw-bold ">
                                Bienvenue sur notre <strong>site Web</strong>!
                            </h2>
                        </div>
                        <div className="Col col-6 d-flex justify-content-center align-items-center ">
                            <Form className="d-flex fs-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                />
                                <i className="bi bi-search ms-2 text-secondary"></i>
                            </Form>{" "}
                        </div>
                    </div>
                    <div className="goTo">
                        <h2>Qui sommes Nous?</h2>
                        <a href="#a_propos" className="circle">
                            <i class="bi fs-1 bi-arrow-down"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section className="apropos-wrapper" id="a_propos">
                <div className="apropos container-xl p-5">
                  <div className="text">
                  <h2>Lorem ipsum dolor.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa veritatis magni nihil debitis excepturi a officiis, dicta officia delectus beatae fuga laboriosam quia labore atque eius ex aut harum?</p>
                  <img className="logo" src={logo} alt="IC" />
                </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
