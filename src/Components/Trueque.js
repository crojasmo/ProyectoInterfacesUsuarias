import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table,Figure,Image} from "react-bootstrap";
import imagen from "./img/auto.jpg"
import user from "./img/user.png"
import { X } from 'react-bootstrap-icons';
import { ArrowLeftRight } from 'react-bootstrap-icons';

class Trueque extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.vendedor={"nombre":"Juan Carlos","listaPreferencias":["Telefono","Lavadora","Notebook"]}
        this.state = {
            tusproductos:[{"nombre":"autito","precio":2200},{"nombre":"estufa","precio":21300},{"nombre":"telefono","precio":99000},{"nombre":"notebook"
            ,"precio":500000},{"nombre":"auto","precio":1290000}],
            productosTrueque:[],
            ValorTrueque:-0
        }
       
        
    }
    
    CreateProducto(nombre,precio){
        var producto=[...this.state.tusproductos]
        var prod={"nombre":nombre,"precio":precio}
        producto.push(prod)
        this.setState({tusproductos:producto})
    }

    Ofrecer(producto){
        var listaProducto=[...this.state.tusproductos]
        var ofrecidos=[...this.state.productosTrueque]
        var valor=this.state.ValorTrueque
        const index = listaProducto.indexOf(producto);
        if (index > -1) {
            listaProducto.splice(index, 1);
        }
        ofrecidos.push(producto)
        valor=valor+producto.precio
        this.setState({tusproductos:listaProducto,productosTrueque:ofrecidos,ValorTrueque:valor})


    }

    Eliminar(producto){
        var listaProducto=[...this.state.tusproductos]
        var ofrecidos=[...this.state.productosTrueque]
        var valor=this.state.ValorTrueque
        const index = ofrecidos.indexOf(producto);
        if (index > -1) {
            ofrecidos.splice(index, 1);
        }
        listaProducto.push(producto)
        valor=valor-producto.precio
        this.setState({tusproductos:listaProducto,productosTrueque:ofrecidos,ValorTrueque:valor})

    }

    
    

    render() {
        
        return <>
            
            <Container fluid>
            <Row >
            <Col xs={2} classname="align-self-start">
                <h1>
                    Sus Productos
                </h1>
                
                
                <br/>
                <br/>
                
                <Card body>
                <ButtonGroup vertical>
                {this.state.tusproductos.map(producto =>
                     <Button variant="outline-secondary" type="button" onClick={this.Ofrecer.bind(this,producto)} > <Figure>
                     <Figure.Image
                       width={50}
                       height={50}
                
                       src={imagen}
                     />
                   </Figure> {producto.nombre}  $ {producto.precio}</Button>
                    

                )}
                </ButtonGroup>
                </Card>
                
                <br/>
               
                <br/>
                
        
            </Col>

        <Col xs={3} classname="align-self-end">
        <h1>
                    Productos para trueque
                </h1>
                
               
                <br/>
                <br/>
                <Card>
                {this.state.productosTrueque.map(producto =>

                <Card>
                <Table>
        
                <th>
                    <Card  style={{ width: '12rem',height: "12rem" }}>
                    <Card.Img variant="top" src={imagen}/>
                    
                      <Card.Title>{producto.nombre}</Card.Title>
                      <Card.Text>
                        $ {producto.precio}
                        
                      </Card.Text>
                     
                     </Card>
                     </th>
                     <th>
                     <X classname="clickeable-x" color="red" onClick={this.Eliminar.bind(this,producto) } size={40}/>
                     </th>
                     </Table>
                     </Card>
                )}
               
                <br/>
               
                <br/>
                <Card body>Valor Total: $        {this.state.ValorTrueque}</Card>
                </Card>
        </Col>
        <Col xs={2}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ArrowLeftRight size={96}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Button variant="success" size="lg"> Ofrecer Trueque</Button>  

            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
        
        </Col>
        <Col xs={2} md={3}>
            <h1 align="left">
                Producto de Interes
            </h1>
            <br/>
                <br/>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/300x300" />
        <Card.Body>
        <Card.Title>Valor</Card.Title>
        
        </Card.Body>
        </Card>
        
        </Col>
    
        <Col xs={3} lg={1} md={2} >
                
        <br/>
            <br/>
            <br/><br/>
            <h2> Vendedor</h2>
            <br/>
            <Row className="justify-content-md-center">
            <Image src={user} fluid/>
            </Row>
            <br/>
            <Card body>
                {this.vendedor.listaPreferencias.map(preferencia=>
                    <Table striped bordered>
                        {preferencia}
                        
                    </Table>
                    
                )}
                <br/>
            </Card>
        </Col>
        </Row>
        </Container>  
        </>

    }
}

export default withRouter(Trueque);


