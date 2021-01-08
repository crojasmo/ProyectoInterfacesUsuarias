import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table,Figure,Image} from "react-bootstrap";
import imagen from "./img/auto.jpg"
import user from "./img/user.png"
import { X } from 'react-bootstrap-icons';
import { ArrowLeftRight } from 'react-bootstrap-icons';
import ModalTrueque from "./modalTrueque";

class Trueque extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.producto={"nombre":"Notebook Acer","precio":1200000}
        this.vendedor={"nombre":"Juan Carlos","listaPreferencias":["Telefono","Lavadora","Notebook"]}
        this.state = {
            tusproductos:[{"nombre":"autito","precio":2200},{"nombre":"estufa","precio":21300},{"nombre":"telefono","precio":99000},{"nombre":"notebook"
            ,"precio":500000},{"nombre":"auto","precio":1290000}],
            productosTrueque:[],
            ValorTrueque:-0,
            showModal: false
        }
       
        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)

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

    
    closeModal() {
        this.setState({showModal: false})
    }

    showModal() {
        this.setState({showModal: true})
    }

    render() {
        
        return <>
            <ModalTrueque closeModal={this.closeModal} showModal={this.state.showModal}/>
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
               
                
                <Table size="sm">
        
                
                    <th><Figure.Image
                       width={50}
                       height={50}
                
                       src={imagen}
                     />
                    
                    &emsp;{producto.nombre} &emsp;${producto.precio}</th>
                     
                     
                   
                     
                    
                     <th align="right">
                     <X classname="clickeable-x" color="red" onClick={this.Eliminar.bind(this,producto) } size={40}/>
                     </th>
                     </Table>
                     
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
            <Button variant="success" onClick={this.showModal} size="lg"> Ofrecer Trueque</Button>

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
                {this.producto.nombre}
            </h1>
            <br/>
                <br/>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/300x300" />
        <Card.Body>
        <Card.Title>$ {this.producto.precio}</Card.Title>
        
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
            <h4> {this.vendedor.nombre}</h4>
            </Row>
            <br/>
            <Card body style={{backgroundColor:"#95BDE0"}}>
                <Card.Title>Lista de Deseos</Card.Title>
                {this.vendedor.listaPreferencias.map(preferencia=>
                    <Table style={{backgroundColor:"white"}} striped bordered>
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


