import React from "react";
import {Image,Button, Card, Col, Row} from "react-bootstrap";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import user from "./img/user.png"

class Comentario extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return<>
         <Card>
        <Row>
        
         <Col xs={3}>
            <h2>{this.props.name || "Nombre"}</h2>
        <Image src={user} fluid/>
        
            <h4>{this.props.calificacion || "Calificacion"}/5 </h4>

            <br/>

            </Col>
            <Col xs={1}></Col>
        <Col xs={7}>
        <br/>
        <br/>
        <br/>
        
        <p align="left"> {this.props.comentario || "Comentario"}</p>
        </Col>
        
        </Row>
         </Card>

        </>
    }

}

export default withRouter(Comentario);