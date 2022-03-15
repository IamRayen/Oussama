import React from "react";
import { Carousel } from "react-bootstrap";

const TestinmonialsCarousel = ({Testimonials}) => {

    return (    
        <Carousel className="test-carousel d-none d-md-block">
            {Testimonials.map((el) => {
                return (
                    <Carousel.Item key={el.key}>
                        <img
                            className="Carousel-Img"
                            src={el.image}
                            alt={el.alt}
                        />
                        <Carousel.Caption className="Carousel-Text">
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
