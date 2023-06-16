import React from "react";
import { Navbar as Menu , Nav, Container, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ContactLinks from "./ContactLinks";
import './Navbar.css';

function Navbar() {

    return (
        <>
            <Menu collapseOnSelect key="lg" sticky="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Menu.Brand className="w-50 fs-3 justify-content-start">
                        <Link to="/" className="text-light float-right text-decoration-none d-flex">
                            <div className="px-3 border border-light border-3 rounded titillium">P</div>
                            <div className="px-1">ortfolio</div>
                        </Link>
                    </Menu.Brand>
                    <Menu.Toggle aria-controls="offcanvasNavbar-expand-lg"/>
                    <Menu.Offcanvas className="bg-dark text-light" id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Nav id="menu" className="text-end">
                            <Nav.Link className="link-container"><NavLink to="/" className="link px-4 py-2 rounded-pill titillium">Home</NavLink></Nav.Link>
                            <Nav.Link className="link-container"><NavLink to="/Professional" className="link px-4 py-2 rounded-pill titillium">Professional</NavLink></Nav.Link>
                            <Nav.Link className="link-container"><NavLink to="/Personal" className="link px-4 py-2 rounded-pill titillium">Personal</NavLink></Nav.Link>
                            <Nav.Link className="link-container"><NavLink to="/About" className="link px-4 py-2 rounded-pill titillium">About</NavLink></Nav.Link>
                            <Nav.Link>
                                <div>
                                    <ContactLinks/>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Menu.Offcanvas>
                </Container>
            </Menu>
        </>
    )
}

export default Navbar;