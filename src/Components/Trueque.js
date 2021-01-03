import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table,Figure} from "react-bootstrap";
import imagen from "./img/auto.jpg"

class Trueque extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            tusproductos:[{"nombre":"autito","precio":2200},{"nombre":"estufa","precio":21300}],
            productosTrueque:[],
            ValorTrueque:-0
        }
        /*this.CreateProducto("autito",2200)
        this.CreateProducto("estufa",21300)
        this.CreateProducto("telefono",99000)
        this.CreateProducto("notebook",500000)
        this.CreateProducto("auto",1290000)*/
        
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
                     <Button variant="outline-secondary" type="button" onClick={this.Ofrecer.bind(this,producto)}> <Figure>
                     <Figure.Image
                       width={50}
                       height={50}
                
                       src={imagen}
                     />
                   </Figure> {producto.nombre} ---- {producto.precio}</Button>
                    

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
                <Card body>
                <ButtonGroup vertical>
                {this.state.productosTrueque.map(producto =>
                     <Button variant="outline-danger" size="lg"> <Figure>
                     <Figure.Image
                       width={50}
                       height={50}
                
                       src={imagen}
                     />
                   </Figure> {producto.nombre} ---- {producto.precio}</Button>
                    

                )}
                </ButtonGroup>
                </Card>
                <br/>
               
                <br/>
                <p>{this.state.ValorTrueque}</p>
        
        </Col>
        
        </Row>
        </Container>  
        </>

    }
}

export default withRouter(Trueque);


