import React from 'react';
import './Contacto.css';
import GoogleMapReact from 'google-map-react';
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
        this.chat = React.createRef();
        this.sendMessagge = this.sendMessagge.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getPosition= this.getPosition.bind(this);
        this.checkNavigator= this.checkNavigator.bind(this);
        this.careers = {}
        this.state = {value: ''};
    }

    handleChange(event) {   
      this.setState({value: event.target.value});
    }

    sendMessagge(){
      var currentdate = new Date(); 
      var time = currentdate.getHours() + ":" + currentdate.getMinutes();
      this.chat.current.innerHTML += '<div class="kontainer"> <img src="/w3images/bandmember.jpg" alt="Avatar"/> <p>'+this.state.value+'</p> <span class="time-right">'+time+'</span> </div>';
      var elementHeight = this.chat.current.scrollHeight;
      this.chat.current.scrollTop = elementHeight;
      this.setState({value: ''});
    }

    checkNavigator(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    }

    getPosition(position){
      var currentdate = new Date(); 
      var time = currentdate.getHours() + ":" + currentdate.getMinutes();
      var center = { lat: position.coords.latitude, lng: position.coords.longitude};
      var zoom = 6;
      this.chat.current.innerHTML += '<div class="kontainer"> <img src="/w3images/bandmember.jpg" alt="Avatar"/> <GoogleMapReact>'+position+'</p> <span class="time-right">'+time+'</span> </div>';
      
    
      var elementHeight = this.chat.current.scrollHeight;
      this.chat.current.scrollTop = elementHeight;
    }
    

    render() {
        
        return <>
         
            <Container fluid={true}>
            <Row>
            <Col>
                
                <br/>
                <br/>
                <div class="scrollbar" ref={this.chat}  style = {{ width: "800px", maxHeight: "400px" }}>
                <div class="kontainer">
                <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
                </div>

                <div class="kontainer darker">
                <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
                </div>

                <div class="kontainer">
                  <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                    <p>Sweet! So, what do you wanna do today?</p>
                  <span class="time-right">11:02</span>
                </div>

                <div class="kontainer darker">
                 <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                  <span class="time-left">11:05</span>
                </div> 
                <div class="kontainer">
                  <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                    <p>Sweet! So, what do you wanna do today?</p>
                  <span class="time-right">11:02</span>
                </div>

                <div class="kontainer darker">
                 <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                  <span class="time-left">11:05</span>
                </div> 
                </div>
                <br/>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <Button variant="success" onClick = {this.checkNavigator}>Button</Button>
                </InputGroup.Prepend>
                <FormControl  placeholder="Maximo 100 caracteres" value={this.state.value} onChange={this.handleChange} maxLength ={100} aria-label="Recipient's username" aria-describedby="basic-addon1" />
                <InputGroup.Append>
                <Button variant="outline-primary" onClick = {this.sendMessagge}>Send</Button>
                </InputGroup.Append>
                
                </InputGroup>
                <br/>
                
        
            </Col>

            <Col>
            
            <h2>Vendedor</h2>
            
            <div class="col d-flex justify-content-center">
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Juan Rojas</h5>
                    <p class="card-text">Telefono: +569664020xx</p>
                    <p class="card-text">Ubicacion:Region Metropolitana,Santiago</p>
                    <a href="#" class="btn btn-primary">Perfil</a>
                </div>
            </div>
            </div>
        
            </Col>
            </Row>

        
        
        </Container>  
        </>

    }
}

export default withRouter(Contacto);