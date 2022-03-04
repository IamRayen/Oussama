import React, { useState, useEffect } from "react";
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

const equipeArr = [{},{},{},{},{}]

const Presentation = () => {
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };

    const [equipe, setEquipe] = useState(equipeArr);
    // const [competence, setCompetence] = useState(null);

    useEffect(() => {
        // const request = async () => {
        //     try {
        //         //fetching skills
        //         const data = await Client.fetch(`*[_type=="Competence"]{
        //             image,
        //             nom,
        //             url
        //         }`);

        //         //fetching team
        //         const data2 = await Client.fetch(`*[_type=="Equipe"]{
        //             image,
        //             nom,
        //             description,
        //             date,
        //             linkedIn,
        //             facebook
        //         }`);

        //         setCompetence(data);
        //         setEquipe(data2);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
        // request();
    }, []);
    console.log(equipe && equipe);

    return (
        <div className="presentation-wrapper container-fluid border">
            <section className="equipe container border">
                <h1>Equipe</h1>
                <div className="container-fluid d-flex justify-content-around flex-wrap border">
                    {equipe &&
                        equipe.map((el) => (
                            <Card key={Math.random()} style={{ width: "180px",margin:"5px" }}>
                                <Card.Img
                                    variant="top"
                                    src={el.image && urlFor(el.image).quality(60).url()}
                                    alt="picture"
                                    style={{height:"220px"}}
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
                                        rel="noopener noreferrer" target="_blank"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </Card.Link>
                                    <Card.Link
                                        href={el.facebook}
                                        rel="noopener noreferrer" target="_blank"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
            </section>
            <section className="competences container border"></section>
        </div>
    );
};

export default Presentation;
