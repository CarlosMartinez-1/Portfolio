import React from "react";
import { useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import git from "../assets/icons/github.png";
import email from "../assets/icons/email.png";
import linkedin from "../assets/icons/linkedin.png";

function ContactLinks(){

    const [tip, setTip] = useState("carlosmartinez1360@gmail.com");

    const copyToolTip = (
        <Tooltip id="tooltip">
            {tip}
        </Tooltip>
    );

    const copy = () => {
        navigator.clipboard.writeText("carlosmartinez1360@gmail.com");
        setTip("Copied!")
    }


    return (
        <>
                <div className="d-flex justify-content-center">
                    <OverlayTrigger placement="bottom" overlay={copyToolTip} onEnter={() => {setTip("carlosmartinez1360@gmail.com")}}>
                        <button type="button" onClick={copy} className="border-0 bg-transparent m-0 p-0">
                            <img src={email} className="contact-icon"></img>
                        </button>
                    </OverlayTrigger>
                    
                    <a href="https://github.com/CarlosMartinez-1" target="_blank">
                        <img src={git} className="contact-icon"></img>
                    </a>
                    <a href="" target="_blank">
                        <img src={linkedin} className="contact-icon"></img>
                    </a>
                </div>
        </>
    )
}

export default ContactLinks