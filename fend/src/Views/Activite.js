import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Img from "../images/tim-trad-BwmOGbS2POw-unsplash-min.jpg";
import Img2 from "../images/sergey-zolkin-m9qMoh-scfE-unsplash-min.jpg";

const Activite = () => {
    return (
        <div className="activite-wrapper container-fluid">
            <div className="row row1">
                <div className="col">
                    <div className="Container">
                        <div className="Carousel-wrapper">
                            <Carousel fade className="Carousel">
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="activite-text py-4 px-2 rounded">
                            <p className="lead fst-italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit, odio! Nesciunt
                                ut, molestiae ipsa numquam nisi eveniet
                                quibusdam cum eius sapiente officiis
                                consectetur, blanditiis eum culpa nemo modi.
                                Debitis, odio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col">
                    <div className="Container Container2">
                        <div className="activite-text py-4 px-2 rounded">
                            <p className="lead fst-italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit, odio! Nesciunt
                                ut, molestiae ipsa numquam nisi eveniet
                                quibusdam cum eius sapiente officiis
                                consectetur, blanditiis eum culpa nemo modi.
                                Debitis, odio.
                            </p>
                        </div>
                        <div className="Carousel-wrapper">
                            <Carousel fade className="Carousel">
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row1">
                <div className="col">col</div>
            </div>
            <div className="row row2">
                <div className="col">col</div>
            </div>
            <div className="row row1">
                <div className="col">col</div>
            </div>
        </div>
    );
};

export default Activite;
