import React from "react";
import "./Personal.css";

import { Parallax } from "react-scroll-parallax";
import projectk from "../assets/gifs/projectk01.gif";
import hotdog from "../assets/gifs/glizzy01.gif";
import pong from "../assets/gifs/beatpong01.gif";

import cube from "../assets/cube.png";

function Personal(){

    return (
        <div className="bg-star">
            <Parallax speed={-20}>
                <div className="w-75 mx-auto text-center text-light titillium title">
                    Game Development
                </div>
            </Parallax>

            <Parallax speed={50}>
            <div className="w-50 mx-auto text-center p-5 m-5 text-light bg-dark rounded-5">
                <h2>My Passion</h2>
                <p>
                Game development is a multidisciplinary effort. 
                Combining not only coding, but music, art, writing, and more into a complete package. 
                The complexity, diversity, and creativity is what drove me to pursue it. 
                Being in exercise in Software development, I have also learned many aspects of software development 
                such as collaboration, development methods, time management, and much more.

                <br></br>
                <br></br>

                Check out what I have been working on.
                </p>
            </div>
            </Parallax>


            <Parallax speed={20}>
            <div className="w-50 mx-auto text-light card-height my-5 responsive-w100">
                <div className="bg-image bg-pjk rounded-3"></div>
                <div className="w-100 content d-flex justify-content-around">
                    <div className="bg-dark p-5 w-50 rounded-3 shadow">
                        <h2>Project K</h2>
                        <p>
                        Become the best agent in the simulation in this upcoming title.
                        </p>
                    </div>

                    <a className="btn btn-outline-light shadow titillium align-self-center fs-4">Coming Soon &#8594;</a>
                    
                </div>
            </div>
            </Parallax>

            <Parallax speed={20}>
            <div className="w-50 mx-auto text-light card-height my-5 responsive-w100">
                <div className="bg-image bg-hotdog bg-pjk rounded-3"></div>
                <div className="w-100 content d-flex justify-content-around">
                    <div className="bg-dark p-5 w-50 rounded-3 shadow">
                        <h2>Glizzy Gladiators</h2>
                        <p>
                        Eastern State Connecticut Game Dev's debut game. Fight for hotdog supremacy in this platform brawler.
                        </p>
                    </div>

                    <a className="btn btn-outline-light shadow titillium align-self-center fs-4" href="https://eastern-game-development.itch.io/glizzy-gladiators" target="_blank">Play &#8594;</a>
                    
                </div>
            </div>
            </Parallax>

            <Parallax speed={0}>
            <div className="w-50 mx-auto text-light card-height mt-5 responsive-w100">
                <div className="bg-image bg-pong bg-pjk rounded-3"></div>
                <div className="w-100 content d-flex justify-content-around">
                    <div className="bg-dark p-5 w-50 rounded-3 shadow">
                        <h2>Beat Pong</h2>
                        <p>
                        A game where rhythm and table tennis are combined in Virtual Reality.
                        </p>
                    </div>

                    <a className="btn btn-outline-light shadow titillium align-self-center fs-4">Play &#8594;</a>
                    
                </div>
            </div>
            </Parallax>

        </div>
    )
}

export default Personal;