import React from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Link, NavLink} from "react-router-dom";

class Header extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.careers = {}
        this.state = {show: false, careers: this.careers}
    }


    render() {
        return <>
            <Navbar bg="light" expand="lg">
                <Container fluid={"xl"}>
                    <Link to={`/`} component={Navbar.Brand}>Truequería</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to={`/`} component={Nav.Link}>Calculadora Prioridad</Link>
                            <NavLink to={`/`} component={Nav.Link}>Generadora de mallas</NavLink>
                            <Nav.Link href="#" className={'dropdown-toggle d-none d-lg-block'}>Carreras</Nav.Link>
                            <Nav.Link href="#link">Actualizar Mallas</Nav.Link>
                            <NavLink to={"/"} component={Nav.Link}>Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    }
}

export default withRouter(Header);


