import React from 'react';
import './Contacto.css';
import GoogleMapReact from 'google-map-react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GeoAltFill} from "react-bootstrap-icons"

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
      this.chat.current.innerHTML += '<div class="kontainer darker"> <img src="/w3images/bandmember.jpg" alt="Avatar" class="right"/><p>Tu ubicacion fue enviada con exito</p> <span class="time-left">'+time+'</span> </div>';
      
    
      var elementHeight = this.chat.current.scrollHeight;
      this.chat.current.scrollTop = elementHeight;
    }

    redirect = () => {
        const {history} = this.props;
        history.push("/vendedor");
    }

    render() {
        
        return <>
         
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Container className={"mt-3"} >
            <Row>
            <Col className = {'col-8'}>
                
                <br/>
                <br/>
                <div class="scrollbar" ref={this.chat}  style = {{maxHeight: "400px" }}>
                <div class="kontainer darker">
                <img src="/w3images/bandmember.jpg" alt="Avatar" class="right"/>
                <p>Hola, mucho gusto</p>
                <span class="time-left">11:00</span>
                </div>
                <div class="kontainer darker">
                <img src="/w3images/bandmember.jpg" alt="Avatar" class="right"/>
                <p>Pregunte y yo respondere sus dudas tan pronto como me sea posible</p>
                <span class="time-left">11:00</span>
                </div> 
                </div>
                <br/>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <Button variant="success" onClick = {this.checkNavigator}><GeoAltFill/></Button>
                </InputGroup.Prepend>
                <FormControl  placeholder="Maximo 100 caracteres" value={this.state.value} onChange={this.handleChange} maxLength ={100} aria-label="Recipient's username" aria-describedby="basic-addon1" />
                <InputGroup.Append>
                <Button variant="outline-primary" onClick = {this.sendMessagge}>Send</Button>
                </InputGroup.Append>
                
                </InputGroup>
                <span class="dashicons dashicons-location"></span>
                <br/>
                
        
            </Col>

            <Col className = {'col-4'}>
            
            <h2>Vendedor</h2>
            
            <div class="col d-flex justify-content-center">
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={this.props.owner.image || "https://via.placeholder.com/150"} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.owner.name || "No Name"}</h5>
                    <p class="card-text">Telefono: {this.props.owner.phone || "No Fono"}</p>
                    <p class="card-text">Ubicacion: {this.props.owner.location || "No Ubicacion"}</p>
                    <Link to={"/vendedor"} class="btn btn-primary">Perfil</Link>
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