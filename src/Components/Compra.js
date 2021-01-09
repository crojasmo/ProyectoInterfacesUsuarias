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
        <br/>
        <div class="col d-flex justify-content-center my-3">
        <Card className = {'round'} style={{ width: '72rem' }}>
            <Card.Header  style={{ backgroundColor : '#DDB8EF'}} className="topRound text-left" >
        
                
                 <Card.Title className="mb-0 "  style={{fontSize:30}}>{this.props.productData.name}</Card.Title>
                 
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
            <Card body className="bg-light">
            <p align="left">{this.props.productData.description}</p>
            </Card>
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
                
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Button variant="primary" onClick = {this.app}>Contactar</Button>
                </Row>
                <br/>
                <Button variant="success" size="lg" onClick={this.redirect}>Trueque</Button>
                {this.state.redirect && <Redirect to={"/trueque"}/>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button  size="lg" style = {{backgroundColor :"#8dde56",borderColor : "#8dde56"}}>Comprar</Button>
                <p className="font-weight-bold mb-0 "
                   style={{fontSize: 30}}> ${this.props.productData.price || "n/a"}</p>
            </Col>
            </Row>
           
            </Card.Body>
        </Card>
        </div>

    </>

}
}

export default withRouter(Compra);