import React from "react";
import ContactLinks from "../components/ContactLinks";
import profile from "../assets/profile.png";

function About(){

    return (
        <>
            <div className="w-100 d-flex responsive-block">
                <div className="w-50 px-5 responsive-w100 text-center">
                    <img className="w-75 p-5 " src={profile}></img>
                </div>
                <div className="w-50 mx-auto p-5 responsive-w100">
                    <h1>About</h1>
                    <p>
                    My name is Carlos Martinez. I am 21 years old. 
                    I graduated from Eastern Connecticut State University in Spring 2023 with a bachelor's in computer science.
                    <br></br>
                    <br></br>
                    I currently work as a web developer intern at Tea & Tea. 
                    I develop and maintain the entirety of the Shopify website. 
                    I also do IT and administrative work there as well.
                    <br></br>
                    <br></br>
                    I love every aspect of creating software. From idea to product, seeing every puzzle piece fit together is fascinating. Every part of software creation is important such as documentation, development, post-deployment, etc. I investigate different fields of software development to see how different puzzles are made. I have explored game development, full-stack web development, and am expanding my skills. I love to learn and am eager to apply my skills to the real world.
                    <br></br>
                    <br></br>
                    Interested in working with me? Contact me below:
                    </p>
                    <div className="m-5">
                    <ContactLinks></ContactLinks>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About 