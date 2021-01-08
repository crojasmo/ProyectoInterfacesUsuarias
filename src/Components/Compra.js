import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter, useHistory } from "react-router"
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

     app = () => {
        const {history} = this.props;
        history.replace("/contacto");
   }

    render() {
        
        return <>
        <br></br>
        <div class="col d-flex justify-content-center">
        <Card className = {'round'} style={{ width: '72rem' }}>
            <Card.Header  style={{ backgroundColor : '#DDB8EF'}} class="text-left topRound" >
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; Featured
                <br></br>
                <br></br>
            </Card.Header>
            <Card.Body>
            <Row>
            <Col>
            <Carousel data-interval="false" >
                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src={this.props.imageSrc1 || "https://via.placeholder.com/100"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>
            ${this.props.precio || "n/a"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="success">Trueque</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style = {{backgroundColor :"#8dde56",borderColor : "#8dde56"}}>Comprar</Button>
            <br></br>
            <br></br>
            <p align="left">Texto alineado a la izquierda de prueba no final el cual sera remplazada por la descripcion de un producto</p>
            </Col>
            <Col>
            <img class="card-img-top perfil" src={this.props.userImage || "https://via.placeholder.com/150"} alt="Card image cap"/>
                <Card.Title>{this.props.userName || "Juan Rojas"}</Card.Title>
                <Row>
                    <Col class="sm-3">
                <Card.Text>
                    <p>Rating:{this.props.rating || "n/a"}</p>                  
                </Card.Text>
                </Col>
                <Col class="sm-9">
                <Button variant="primary" onClick = {this.app}>Contactar</Button>
                </Col>
                </Row>
            </Col>
            </Row>
           
            </Card.Body>
        </Card>
        </div>

    </>

}
}

export default withRouter(Compra);