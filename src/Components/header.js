import React from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Link, NavLink} from "react-router-dom";
import {Col, FormControl, InputGroup, Row,ButtonGroup,Dropdown,DropdownButton} from "react-bootstrap";
import {Search} from "react-bootstrap-icons"

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
            <Navbar bg="" expand="lg" className={"barra"}>
                <Container fluid={true}>
                    <Link to={`/`} className={"text-white h1"} component={Navbar.Brand}><h1>Truequería</h1></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className={"flex-column"}>
                        <Row className={"ml-auto"}>
                            <Col>
                                <Nav>
                                    <NavLink to={"/"} className={"text-white"} component={Nav.Link}>Nombre de usuario</NavLink>
                                </Nav>
                            </Col>
                        </Row>
                        <Row className={"w-100 align-items-center"}>
                            <Col md={1}>
                            <DropdownButton  variant="light"as={ButtonGroup} title="Ordenar Por..." id="bg-vertical-dropdown-2">
                            <Dropdown.Item eventKey="1">Fecha de Publicación</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Precio Ascendente</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Precio Descendente</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Usado Primero</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Nuevo Primero</Dropdown.Item>
                            </DropdownButton>
                            </Col>
                            <Col  className={"align-self-start align-items-center text-left"}>
                                <Nav>
                                    <NavLink to={"/"}  className={"mb-0 align-items-center text-white"}>Publicar</NavLink>
                                </Nav>
                            </Col>
                            <Col md={2}>
                            <DropdownButton  variant="light"as={ButtonGroup} title="Categorias" id="bg-vertical-dropdown-1">
                            <Dropdown.Item eventKey="1">Tecnologia</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Electro</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Automovil</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Vestimenta</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Jugueteria</Dropdown.Item>
                            </DropdownButton>
                            </Col>
                            <Col md={2}>
                                <InputGroup>
                                    <FormControl type="search" id="inlineFormInputGroupUsername2" placeholder="Buscar" />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-default"><Search/></InputGroup.Text>
                                    </InputGroup.Append>

                                </InputGroup>

                            </Col>
                        </Row>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    }
}

export default withRouter(Header);


