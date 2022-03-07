import React, { useState, useEffect,useRef } from "react";
import Client from "../Client";
import myConfiguredSanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import { Card } from "react-bootstrap";

// const equipeArr = [
//     {
//         "date": "2022-03-04",
//         "description": "Serieux et intelligent.",
//         "facebook": null,
//         "image": {
//             "_type": "image",
//             "asset": {
//                 "_ref": "image-bb7f6f4ee9c62df90347c545a90249e39b6a7589-2419x3225-jpg",
//                 "_type": "reference"
//             }
//         },
//         "linkedIn": "https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer",
//         "nom": "Mohamed Rayen Labidi"
//     },
//     {
//         "date": "2022-03-04",
//         "description": "Serieux et intelligent.",
//         "facebook": null,
//         "image": {
//             "_type": "image",
//             "asset": {
//                 "_ref": "image-bb7f6f4ee9c62df90347c545a90249e39b6a7589-2419x3225-jpg",
//                 "_type": "reference"
//             }
//         },
//         "linkedIn": "https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer",
//         "nom": "Mohamed Rayen Labidi"
//     },
//     {
//         "date": "2022-03-04",
//         "description": "Serieux et intelligent.",
//         "facebook": null,
//         "image": {
//             "_type": "image",
//             "asset": {
//                 "_ref": "image-bb7f6f4ee9c62df90347c545a90249e39b6a7589-2419x3225-jpg",
//                 "_type": "reference"
//             }
//         },
//         "linkedIn": "https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer",
//         "nom": "Mohamed Rayen Labidi"
//     },
//     {
//         "date": "2022-03-04",
//         "description": "Serieux et intelligent.",
//         "facebook": null,
//         "image": {
//             "_type": "image",
//             "asset": {
//                 "_ref": "image-bb7f6f4ee9c62df90347c545a90249e39b6a7589-2419x3225-jpg",
//                 "_type": "reference"
//             }
//         },
//         "linkedIn": "https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer",
//         "nom": "Mohamed Rayen Labidi"
//     },
// ]

const equipeArr = [{}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}];

const Presentation = () => {
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };

    const [equipe, setEquipe] = useState(equipeArr);
    const [competence, setCompetence] = useState(equipeArr);

    useEffect(() => {
        const request = async () => {
            try {
                //fetching skills
                const data = await Client.fetch(`*[_type=="Competence"]{
                    image,
                    nom,
                    url
                }`);

                //fetching team
                const data2 = await Client.fetch(`*[_type=="Equipe"]{
                    image,
                    nom,
                    description,
                    date,
                    linkedIn,
                    facebook
                }`);

                setCompetence(data);
                setEquipe(data2);
            } catch (error) {
                console.log(error);
            }
        };
        // request();
    }, []);
    
    //translation for competences slider
    const ref = useRef(null);

    const [translation, setTranslation] = useState(0)
    const [sliderstyle, setSliderstyle] = useState({
        transform:`translateX(${translation}px)`
    })
    const moreTranslation = () => {
        setTranslation(translation <= -ref.current.offsetWidth+1400 ? -ref.current.offsetWidth+1300 : translation - 200)

        setSliderstyle({
            transform:`translateX(${translation - 200}px)`
        })
    }
    const lessTranslation = () => {
        setTranslation(translation >= -200 ? 0 : translation + 200)
        setSliderstyle({
            transform:`translateX(${translation >= -200 ? 0 : translation + 200}px)`
        })
    }

    return (
        <div className="presentation-wrapper container-fluid border">
            <section className="equipe container border">
                <h1>Equipe</h1>
                <div className="container-fluid d-flex justify-content-around flex-wrap border">
                    {equipe &&
                        equipe.map((el) => (
                            <Card
                                key={Math.random()}
                                style={{ width: "250px", margin: "5px" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={
                                        el.image &&
                                        urlFor(el.image).quality(60).url()
                                    }
                                    alt="picture"
                                    style={{ height: "220px" }}
                                />
                                <Card.Body>
                                    <Card.Title>{el.nom}</Card.Title>
                                    <hr />
                                    <Card.Subtitle>
                                        Parmi nous depuis le {el.date}
                                    </Card.Subtitle>
                                    <Card.Text>{el.description}</Card.Text>
                                    <Card.Link
                                        href={el.linkedIn}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </Card.Link>
                                    <Card.Link
                                        href={el.facebook}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
            </section>
            <section className="competences-section container border">
                <h1>Competences</h1>

                <div className="competences-wrapper container overflow-hidden border">
                <div className="sliderNav sliderNavRight border d-flex justify-content-center align-items-center" onClick={moreTranslation}><i style={{fontSize:"80px"}} className="bi bi-caret-right"></i></div>
                        <div className="sliderNav sliderNavLeft border d-flex justify-content-center align-items-center" onClick={lessTranslation}><i style={{fontSize:"80px"}} className="bi bi-caret-left"></i></div>
                    <div style={sliderstyle} ref={ref} className="competences row">
                        {competence &&
                            competence.map((el) => (
                                <Card
                                    className="col"
                                    key={Math.random()}
                                    style={{ width: "200px", margin: "5px" }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={
                                            el.image &&
                                            urlFor(el.image).quality(60).url()
                                        }
                                        alt="picture"
                                        style={{ height: "220px" }}
                                    />
                                    <Card.Body>
                                        <Card.Title>Nom de Programme{el.nom}</Card.Title>
                                        <hr />
                                        <Card.Link
                                            href={el.linkedIn}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            style={{textDecoration:"none", color:"black"}}
                                        >
                                            <lead>learn more</lead><i class="bi ms-2 bi-arrow-right"></i>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Presentation;
