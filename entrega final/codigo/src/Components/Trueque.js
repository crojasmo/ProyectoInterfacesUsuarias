import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table,Figure,Image,Form} from "react-bootstrap";
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
            tusproductos:[{"nombre":"autito","precio":2200,"src":"https://mercadopax.com/ar/wp-content/uploads/2019/12/auto-rojo.jpg"}
            ,{"nombre":"estufa","precio":21300,"src":"https://www.heimat.cl/wp-content/uploads/2020/04/EstufaGasNegra01.jpg"},
            {"nombre":"telefono","precio":99000,"src":"https://images.ctfassets.net/wcfotm6rrl7u/DJ4j4K1F7i8iqeMcckS24/82ce2300fb3a4064c6b5eb497d0cd4e9/nokia_5_1_Plus-front_back-Black-ROW1.png"}
            ,{"nombre":"notebook","precio":500000,"src":"https://static.acer.com/up/Resource/Acer/Laptops/Aspire_1/images/20190430/Acer-Aspire-1-A115-31-main.png"}
            ,{"nombre":"auto","precio":1290000,"src":"https://www.revistaturbo.com/sites/default/files/nissan_3.jpg"}],
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
            <Container className='mt-3' fluid>
            <Row >
            <Col xs={2} classname="align-self-start">
                <h3>
                    Sus Productos
                </h3>
                
                
                <br/>
                <br/>
                
                <Card body>
                    <Card.Body className='p-0'><p className='text-muted mb-0'>Selecciona los productos que quieras ofrecer como intercambio</p></Card.Body>
                <ButtonGroup vertical>
               
                {this.state.tusproductos.map(producto =>
                     <Button variant="outline-secondary" type="button" onClick={this.Ofrecer.bind(this,producto)} > <Figure>
                     <Figure.Image
                       width={50}
                       height={50}
                
                       src={producto.src}
                     />
                   </Figure> {producto.nombre}  $ {producto.precio}</Button>
                    

                )}
                </ButtonGroup>
                </Card>
                
                <br/>
               
                <br/>
                
        
            </Col>

        <Col xs={3} classname="align-self-end">
        <h3>
                    Productos para trueque
                </h3>
                
               
                <br/>
                <br/>
                <Card>
                {this.state.productosTrueque.map(producto =>
               
                
                <Table size="sm">
        
                
                    <th><Figure.Image
                       width={50}
                       height={50}
                
                       src={producto.src}
                     />
                    
                    &emsp;{producto.nombre} &emsp;${producto.precio}</th>
                     
                     
                   
                     
                    
                     <th align="right">
                     <X classname="clickeable-x" color="red" onClick={this.Eliminar.bind(this,producto) } size={40}/>
                     </th>
                     </Table>
                     
                )}
               
                <br/>
               
                <br/>
                <Card body>Valor Acumulado: $        {this.state.ValorTrueque}</Card>
                </Card>
                <Card body>
                <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label >Efectivo</Form.Label>
                <Form.Control type="email" placeholder="$" />
                
                </Form.Group>
                </Form>
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
            <h3 align="left">
                {this.props.product.name}
            </h3>
            <br/>
                <br/>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.product.images[0]} />
        <Card.Body>
        <Card.Title>$ {this.props.product.price}</Card.Title>
        
        </Card.Body>
        </Card>
        
        </Col>
    
        <Col xs={3} lg={2} md={3} >
                
        <br/>
            <br/>
            <br/><br/>
            <h2> Vendedor</h2>
            <br/>
            
            <Row className="justify-content-md-center">
            <Col>
                <Image src={this.props.owner.image} width={150} height={"auto"}/>
                <h4> {this.props.owner.name}</h4>
            </Col>
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


