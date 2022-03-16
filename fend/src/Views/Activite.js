import React from "react";
import { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import Img from "../images/tim-trad-BwmOGbS2POw-unsplash-min.jpg";
import Img2 from "../images/sergey-zolkin-m9qMoh-scfE-unsplash-min.jpg";

const Activite = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                        <ul className="activite-text py-4 px-5 rounded">
                            <li className="lead fst-italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                            <li className="lead fst-italic">Reprehenderit, odio!</li>
                            <li className="lead fst-italic">
                                Nesciunt ut, molestiae ipsa numquam nisi eveniet
                                quibusdam cum eius sapiente officiis.
                            </li>
                            <li className="lead fst-italic">
                                consectetur, blanditiis eum culpa nemo modi.
                                Debitis, odio.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col">
                    <div className="Container Container2">
                    <ul className="activite-text py-4 px-5 rounded">
                            <li className="lead fst-italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                            <li className="lead fst-italic">Reprehenderit, odio!</li>
                            <li className="lead fst-italic">
                                Nesciunt ut, molestiae ipsa numquam nisi eveniet
                                quibusdam cum eius sapiente officiis.
                            </li>
                            <li className="lead fst-italic">
                                consectetur, blanditiis eum culpa nemo modi.
                                Debitis, odio.
                            </li>
                        </ul>
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
        </div>
    );
};

export default Activite;
