import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table,Figure,Image} from "react-bootstrap";
import user from "./img/user.png"
import Item from "./item";


class Vendedor extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.producto={"nombre":"Notebook Acer","precio":1200000}
        this.vendedor={"nombre":"Juan Carlos","listaPreferencias":["Telefono","Lavadora","Notebook"],"ubicacion":"Santiago"
        ,"Telefono":"+569664020XX","calificacion":4.5}
        this.state = {
            tusproductos:[{"nombre":"autito","precio":2200},{"nombre":"estufa","precio":21300},{"nombre":"telefono","precio":99000},{"nombre":"notebook"
            ,"precio":500000},{"nombre":"auto","precio":1290000}]
        }
       
        
    }

    render(){

        return<>

        <Container fluid>
        <Row >
        <br/>
        <Col xs={1}>
            <h2>Vendedor</h2>
        <Image src={user} fluid/>
            <h4> {this.vendedor.nombre}</h4>

            <br/>
    
        
        </Col>
        <Col xs={3}>
        <br/>
        <br/>
        <br/>
        <Card body align="left">
        Nombre: {this.vendedor.nombre} <br/>
        Ubicación: {this.vendedor.ubicacion} <br/>
        Telefono: {this.vendedor.Telefono} <br/>
        Calificación: {this.vendedor.calificacion}
        </Card>

        </Col>
        <Col xs={3}>
            <br/>
            <br/>
            <br/>
            <br/>
        <Button href="/contacto" variant="primary" size="lg" block>Contactar</Button>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
            <br/>
            <h1>
            Mas productos de este
vendedor:
            </h1>
            <br/>
        <Item/>
        <br/>
            <br/>
        <Item/>
        </Col>

        </Row>
        <Row>
        
        </Row>

        </Container>








        </>

    }


}

export default withRouter(Vendedor);