import React, { useState, useEffect } from "react";
import Client from "../Client";

const Projets = () => {
    const ghostArray = [
        {
            date: "2022",
            image: {
                asset: {
                    url: "https://cdn.sanity.io/images/ziue68m6/production/6eccfeeffdd798efab4ebcbd9b17d2ce563ab4d8-5314x3596.jpg",
                },
            },
            mission: "Loreum Ipsum kkkkkkk",
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
            slug: {
                current: "loreum-ipsum-kkkkkkk",
            },
        },
        {
            date: "2022",
            image: {
                asset: {
                    url: "https://source.unsplash.com/1600x900/?nature",
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
                    url: "https://source.unsplash.com/1600x900/?sport",
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
                    url: "https://source.unsplash.com/1600x900/?basketball",
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
                const data = await Client.fetch(`*[_type=="Projets"]{
                    image{
                        asset ->{
                            _id,
                            url
                        }
                    },
                    mission,
                    slug{
                        current
                    },
                    date,
                }`);
                setProjects(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };
        request();
    }, []);

    return (
        <div className="Projet-wrapper border">
            <div className="Projets container-xl d-flex flex-wrap justify-content-center p-0">
                {projects.map((el) => {
                    return (
                        <div key={Math.random()} className=" project-wrapper flex-fill " style={{height: "440px",
                        width: `${
                            Math.random() * (550 - 350) + 350
                        }px`,}}>
                        <div
                            className="Project "
                            style={{
                                backgroundImage: `url(${el.image.asset.url})`,
                                backgroundSize: "cover",
                                height: "440px",
                            }}
                        ></div>
                            <h4 className="mission display-6 m-2 p-1">{el.mission}</h4>
                            <p className="date border p-4 m-0">{el.date}</p>
                        
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projets;
