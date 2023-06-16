import React from "react";
import ContactLinks from "./ContactLinks";

function Footer(){

    return (
        <>
            <div className="bg-dark w-100">
                <div className="pt-5">
                    <ContactLinks/>
                </div>
                <div className="w-25 pt-3 pb-5 mx-auto text-light text-center">
                    Carlos Martinez
                    <br></br>
                    &copy;Copyright 2023
                </div>
            </div>
        </>
    )
}

export default Footer 