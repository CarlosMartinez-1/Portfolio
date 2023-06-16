import React from "react";
import './Professional.css'

function Professional(){

    return (
        <>
            <div className="banner w-100 p-5">
                <div className="w-75 mx-auto d-flex text-light responsive-block">
                    <div className="w-50 responsive-w100">
                        <h1 style={{fontSize: "6em"}}>Clean. <br></br> Simple. <br></br> Powerful. </h1>
                        <br></br>
                        <br></br>
                        <h2>Making the Modern Web.</h2>
                    </div>
                    <div className="w-50 d-flex flex-wrap bg-black rounded-5 p-3 responsive-w100 pop">
                        <div className="w-50 h-50 p-2">
                            <div className="w-100 h-100 p-1 rounded-4" style={{backgroundColor: "slateblue"}}>
                            </div>
                        </div>
                        <div className="w-50 h-50 p-2">
                            <div className="w-100 h-100 p-1 rounded-4" style={{backgroundColor: "#98c1d9"}}>
                            </div>
                        </div>
                        <div className="w-50 h-25 p-2">
                            <div className="w-100 h-100 p-1 rounded-4" style={{backgroundColor: "#533A7B"}}>
                            </div>
                        </div>
                        <div className="w-25 h-25 p-2">
                            <div className="w-100 h-100 p-1 rounded-4" style={{backgroundColor: "#4B244A"}}>
                            </div>
                        </div>
                        <div className="w-25 h-25 p-2">
                            <div className="w-100 h-100 p-1 rounded-4" style={{backgroundColor: "#25171A"}}>
                            </div>
                        </div>
                        <div className="w-100 h-25 p-2">
                            <div className="w-100 h-100 p-1 rounded-4" style={{backgroundColor: "slateblue"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-5 p-5 mx-auto m-5 text-center blurb">
                <h2>My Work</h2>
                <p className="fs-4">
                    Majority of my involvement is with front-end development. 
                    Creating a web app that meets the needs of the client while also balancing 
                    the user experience and creativity is satisfying. I am also familiar with full-stack 
                    developement, more specifically the PERN stack.

                    <br></br>
                    <br></br>

                    Here's my involvment.

                </p>

            </div>

            <div className="w-75 bg-white shadow rounded-5 p-5 mx-auto m-5 d-flex responsive-block"> 
                <div className="w-50 responsive-w100">
                    <h2>Portfolio</h2>
                    <p>
                        This website! This is my portfolio website where I get the opportunity to showcase my works and ideas online. 
                        
                        <br></br>
                        <br></br>
                        Portfolio itself is a concept of a professional social application where people get to share their professional works or hobbies. 
                        It is made to be accessible to anyone with its intuitive and sleek design. 
                        Users can upload their works, give updates, link websites, or use the simple Portfolio Web Builder. 
                        It differentiates from other professional apps because is no need to provide employment info, education, and other sensitive info. 
                        It is meant to be simple; allowing users to focus on sharing their creativity.


                    </p>
                </div>
                <div className="w-50 d-flex bg-white rounded-4 shadow pop flex-wrap responsive-w100">
                    <div className="w-100 h-25 rounded-4 bg-dark p-3 d-flex justify-content-between">
                        <div className="text-light d-flex my-auto">
                            <div className="px-3 border border-light border-3 rounded titillium">P</div>
                            <div className="px-1">ortfolio</div>
                        </div>
                        <div className="bg-light p-1">

                        </div>
                    </div>

                    <div className="w-100 h-25 p-2 bg-light shadow-sm rounded-4 mx-4 d-flex">
                        <div className="w-25 pd-1 bg-secondary rounded-3">

                        </div>
                        <div className="w-75 mx-2 d-flex flex-column justify-content-around">
                            <p className="text-muted">@Stacy</p>
                            <p>Check out my latest art post on Portfolio!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-75 bg-white shadow rounded-5 p-5 mx-auto m-5 d-flex responsive-block"> 
                <div className="w-50 responsive-w100 pop">
                    <iframe className="w-100 h-100" src="https://teantea.co/password" title="Tea and Tea"></iframe>
                </div>
                <div className="w-50 responsive-w100">
                    <h2>Tea &amp; Tea</h2>
                    <p>
                    I work as a web developer intern at Tea & Tea, a startup focused on lifestyle products. 
                    I develop and maintain the Shopify website. 
                    This also includes managing the email accounts, SEO optimization, and general IT/admin tasks. 
                    Being a small business, I was surprised to learn about how a small business operates. 
                    <br></br>
                    <br></br>
                    The website has not launched yet. More details yet to come!

                    </p>

                    <a className="btn btn-dark" href="https://teantea.co/" target="_blank">View Here</a>
                </div>
                
            </div>

            <div className="w-75 bg-white shadow rounded-5 p-5 mx-auto m-5 d-flex responsive-block"> 
                <div className="w-50 responsive-w100">
                    <h2>S-Phasec</h2>
                    <p>
                        
                    My official introduction to web development. 
                    I volunteered as a co-lead web developer at S-PHASEC during the pandemic. 
                    S-PHASEC is a student run organization at Yale University that aimed at spreading vaccine information and vaccinations to more susceptible communities. 
                    I helped with their online presence by developing and maintaining the website. 

                    </p>

                    <a className="btn btn-dark" href="https://www.s-phasec.org/" target="_blank">View Here</a>
                </div>
                <div className="w-50 responsive-w100 pop">
                    <iframe className="w-100 h-100" src="https://www.s-phasec.org/" title="S-Phasec"></iframe>
                </div>
            </div>
        </>
    )
}

export default Professional;