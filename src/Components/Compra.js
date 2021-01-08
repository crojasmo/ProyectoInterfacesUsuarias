import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter, useHistory } from "react-router"
import imagen from "./img/auto.jpg"
import './Compra.css';
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Carousel,Table} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class Compra extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            redirectTrueque: false,
        };
        this.redirect = this.redirect.bind(this)
    }

     app = () => {
        const {history} = this.props;
        history.replace("/contacto");
   }

   redirect = () => {
       const {history} = this.props;
       history.push("/trueque");
   }

    render() {
        
        return <>
        <br></br>
        <div class="col d-flex justify-content-center my-3">
        <Card className = {'round'} style={{ width: '72rem' }}>
            <Card.Header  style={{ backgroundColor : '#DDB8EF'}} class="text-left topRound" >
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; {this.props.productData.name}
                <br></br>
                <br></br>
            </Card.Header>
            <Card.Body>
            <Row>
            <Col>
            <Carousel data-interval="false"  >
                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src={this.props.productData.images[0]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>
            ${this.props.productData.price || "n/a"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="success" onClick={this.redirect}>Trueque</Button>
                {this.state.redirect && <Redirect to={"/trueque"}/>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button style = {{backgroundColor :"#8dde56",borderColor : "#8dde56"}}>Comprar</Button>
            <br></br>
            <br></br>
            <p align="left">{this.props.productData.description}</p>
            </Col>
            <Col className={"col-4"}>
            <img class="card-img-top perfil" src={this.props.owner.image || "https://via.placeholder.com/150"} alt="Card image cap"/>
                <Card.Title>{this.props.owner.name}</Card.Title>
                <Row>
                    <Col class="sm-3">
                <Card.Text>
                    <p>Rating: {this.props.owner.rating || "0"}/5</p>
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