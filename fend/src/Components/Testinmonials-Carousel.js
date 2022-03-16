import React from "react";
import { Carousel, Image } from "react-bootstrap";

const TestinmonialsCarousel = ({ Testimonials }) => {
    return (
        <Carousel className="test-carousel d-none d-md-block">
            {Testimonials.map((el) => {
                return (
                    <Carousel.Item key={el.key}>
                        <div
                            className="img-container"
                            style={{ width: "740px", height: "445px" }}
                        >
                            <Image
                                className="Carousel-Img"
                                src={el.image}
                                alt={el.alt}
                                fluid
                            ></Image>
                        </div>
                        <Carousel.Caption className="Carousel-Text mb-5 ">
                            <h3>{el.title}</h3>
                            <p>"{el.comment}"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default TestinmonialsCarousel;
