import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/cjs/Container";
import {Link} from "react-router-dom";
class Footer extends React.Component {
    render() {
        return <Container fluid={true} className={"bg-light"}>
            <Row>
                <Col as={"p"} sm={true} className="my-1 text-muted text-center text-sm-left align-self-center">
                    <Link id="contact" style={{color: "grey"}} to="/contact"> Contacto</Link>
                </Col>
                <Col as={"p"} sm={true} className="my-1 text-center text-muted">Creado con el cora️ por estudiantes para
                    estudiantes <br/>
                    <a referrerPolicy="origin" rel="noopener"
                       href="http://github.com/CsarMan/malla-interactiva"
                       target="_blank">Código fuente</a>
                </Col>
                <Col as={"p"} sm={true} className="my-1 text-muted text-center text-sm-right align-self-center">
                    <Link id="goToAportes" style={{color: "grey"}} to="/aportes">Donaciones</Link>
                </Col>
            </Row>

        </Container>    }
}

export default Footer;