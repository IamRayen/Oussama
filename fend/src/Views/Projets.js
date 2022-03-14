import React, { useState, useEffect } from "react";
import Client from "../Client";

const Projets = () => {
    const [isLoaded, setIsLoaded] = useState(false);


    const ghostArray = [
        {
            date: "2022",
            image: {
                asset: {
                    url: "https://cdn.sanity.io/images/ziue68m6/production/6eccfeeffdd798efab4ebcbd9b17d2ce563ab4d8-5314x3596.jpg",
                },
            },
            mission: "Loreum Ipsum kkkkkkk PPPPPPPP",
            maitre:"loreum Maitre MMMMMMMM",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2005",
            image: {
                asset: {
                    url: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            maitre:"loreum Maitre MMMMMMMM",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2021",
            image: {
                asset: {
                    url: "https://images.unsplash.com/photo-1604011237331-e2a92d399b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1835&q=80",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            maitre:"loreum Maitre MMMMMMMM",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2021",
            image: {
                asset: {
                    url: "https://images.unsplash.com/photo-1618522285664-f55ff2b7a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            maitre:"loreum Maitre MMMMMMMM",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2022",
            image: {
                asset: {
                    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            maitre:"loreum Maitre MMMMMMMM",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2022",
            image: {
                asset: {
                    url: "https://source.unsplash.com/1000x900/?nature",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2008",
            image: {
                asset: {
                    url: "https://source.unsplash.com/1600x900/?people",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2016",
            image: {
                asset: {
                    url: "https://source.unsplash.com/500x500/?car",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2015",
            image: {
                asset: {
                    url: "https://source.unsplash.com/1600x900/?love",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
    ];

    const [projects, setProjects] = useState(ghostArray);

    useEffect(() => {
        const request = async () => {
            try {
                //fetching projects
                const data = await Client.fetch(`*[_type=="References"]{
                    image{
                        asset ->{
                            _id,
                            url
                        }
                    },
                    mission,
                    maitre,
                    date,
                }`);
                setProjects(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        //request data from sanity
        request();

        //change ghostArray to the data when you work with sanity later
        const ghostArray = true
        const checkLoad = () => (ghostArray ? setIsLoaded(true) : null);

        checkLoad();
    }, []);


    return (
        <div className="Projet-wrapper border">
            {isLoaded && (
                <div className="Projets container-xl d-flex flex-wrap justify-content-center p-0">
                    {projects
                        //make the sort by year function
                        .sort((a, b) => {
                            return parseInt(b.date) - parseInt(a.date);
                        })
                        .map((el) => {
                            return (
                                <div
                                    key={Math.random()}
                                    className=" project-wrapper flex-fill"
                                    style={{
                                        height: "440px",
                                        width: `${
                                            Math.random() * (550 - 350) + 350
                                        }px`,
                                    }}
                                >
                                    <div
                                        className="Project "
                                        style={{
                                            backgroundImage: `url(${el.image.asset.url})`,
                                            backgroundSize: "cover",
                                            height: "440px",
                                        }}
                                    ></div>
                                    <h4 className="mission display-6 m-2 p-1">
                                        {el.mission}
                                        <br />
                                        <span className="h5">{el.maitre}</span>
                                    </h4>
                                    <p className="date border p-4 m-0">
                                        {el.date}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

export default Projets;
