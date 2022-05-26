import {Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";

function Heading(){
     return(
        <Navbar color="dark" dark>
            <Container className="d-flex">
                <NavbarBrand href="/">Utilisateur</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className = "btn  btn-primary" to={"/adduser"} >
                            Nouvel Utilisateur
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Heading