import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table,Figure,Image} from "react-bootstrap";
import user from "./img/user.png"
import nokia from "./img/nokia.jpg"
import autoReal from "./img/autoreal.jpg"
import Item from "./item";
import Comentario from "./comentario"


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
        <br/>
        <br/>
        <Col xs={2}>
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
        <Col xs={2}>
            <br/>
            <br/>
            <br/>
            <br/>
        <div align="center">
        <Button href="/contacto" variant="primary" size="lg" block>Contactar</Button>
        </div>
        </Col>
        <Col xs={2}>
        </Col>
        <Col xs={2}>
            <br/>
            <h1>
            Mas productos de este
vendedor:
            </h1>
           
            
        </Col>

        </Row>
        <Row>
        <Col xs={6}>
            <Comentario comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aliquam a bibendum leo. Vestibulum porttitor elit vitae convallis laoreet. 
             Proin sit amet libero id nisl interdum tincidunt ac ac nisi. Donec aliquet ultricies lorem,
              eget auctor dolor cursus sed. Morbi eu posuere neque, et dapibus risus. Etiam consequat consectetur accumsan.
               In euismod quis ipsum non aliquam. In eget rutrum urna. Ut sollicitudin porttitor metus,
                vel placerat quam tincidunt ac. Nam vehicula diam nec magna iaculis, non vestibulum mauris interdum.
                 Etiam sodales dapibus ullamcorper. Curabitur ullamcorper diam eu cursus ultrices.
                  Aenean lobortis malesuada nulla, eu ultricies tellus. Aenean dictum hendrerit nibh posuere porttitor."
                  name="Jose Luis" calificacion="4"/>
        </Col>
        
        <Col xs={3}>
        
        </Col>
        <Col xs={2}>
        <br/>
        <Item name="Celular Nokia" price={145000} imageSrc={nokia} />
        <br/>
        </Col>

        </Row>
        <Row>
            <Col xs={6}>
            <Comentario/>
            </Col>
            <Col xs={3}>

            </Col>
            <Col xs={2}>
            <Item name="Auto" price={1990000}imageSrc={autoReal} />
            </Col>
        </Row>

        </Container>








        </>

    }


}

export default withRouter(Vendedor);