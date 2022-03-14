import React from "react";
import { Carousel } from "react-bootstrap";

const TestinmonialsCarousel = () => {
    const Testimonials = [
        {key:"1",image:"https://source.unsplash.com/200x200/?technologie",alt:"first",title:"First",comment:"Nulla vitae elit libero, a pharetra augue mollisinterdum"},
        {key:"2",image:"https://source.unsplash.com/200x200/?race",alt:"second",title:"Second",comment:"Nulla vitae elit libero, a pharetra augue mollisinterdum"},
        {key:"3",image:"https://source.unsplash.com/200x200/?cars",alt:"third",title:"Third",comment:"Nulla vitae elit libero, a pharetra augue mollisinterdum"},
    ]
    return (
        <Carousel className="test-carousel">
            {Testimonials.map((el)=>{
                return <Carousel.Item                     key={el.key}
                >
                <img
                    className="d-block Carousel-Img"
                    src={el.image}
                    alt={el.alt}
                />
                <Carousel.Caption className="Carousel-Text">
                    <h3>{el.title}</h3>
                    <p>
                        {el.comment}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            })}
        </Carousel>
    );
};

export default TestinmonialsCarousel;
