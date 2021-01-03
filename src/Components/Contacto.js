import React from 'react';
import './Contacto.css';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table} from "react-bootstrap";

class Contacto extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.careers = {}
    }
    

    render() {
        
        return <>
         
            <Container fluid={true}>
            <Row>
            <Col>
                
                <br/>
                <br/>
                <div class="container">
                <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
                </div>

                <div class="container darker">
                <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
                </div>

                <div class="container">
                  <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                    <p>Sweet! So, what do you wanna do today?</p>
                  <span class="time-right">11:02</span>
                </div>

                <div class="container darker">
                 <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                  <span class="time-left">11:05</span>
                </div> 
                <br/>
               
                <br/>
                
        
            </Col>

            <Col>aaaaaaaa</Col>
            </Row>

        
        
        </Container>  
        </>

    }
}

export default withRouter(Contacto);