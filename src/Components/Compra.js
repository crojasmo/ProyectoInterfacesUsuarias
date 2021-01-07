import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import imagen from "./img/auto.jpg"
import './Compra.css';
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Carousel,Table} from "react-bootstrap";

class Compra extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        
        return <>
        <br></br>
        <div class="col d-flex justify-content-center">
        <Card style={{ width: '72rem' }}>
            <Card.Header style={{ backgroundColor : '#DDB8EF'}} class="text-left" >&nbsp;&nbsp;&nbsp;&nbsp; Featured</Card.Header>
            <Card.Body>
            <Row>
            <Col>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen} 
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>
            <Button variant="success">Trueque</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style = {{backgroundColor :"#bff997",borderColor : "#bff997"}}>Comprar</Button>
            </Col>
            <Col>
            <img class="card-img-top perfil" src={imagen} alt="Card image cap"/>
                <Card.Title>Juan Rojas</Card.Title>
                <Card.Text>
                    <p class="card-text">Telefono: +569664020xx</p>
                    <p class="card-text">Ubicacion:Region Metropolitana,Santiago</p>
                </Card.Text>
                <Button variant="primary">Contactar</Button>
            </Col>
            </Row>
           
            </Card.Body>
        </Card>
        </div>

    </>

}
}

export default withRouter(Compra);