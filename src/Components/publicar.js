import React from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

class Publicar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {validated: false}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({validated: !this.state.validated})
    }

    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                        <Card className={'mt-3'}>
                            <Card.Body>
                            <Card.Title className={'text-left'}>
                                Nuevo Porducto
                            </Card.Title>
                                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="productName">
                                        <Form.Label>Nombre Producto</Form.Label>
                                        <Form.Control required={true} type="text" placeholder="Nombre Producto" />
                                    </Form.Group>

                                    <Form.Group controlId="description">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control required={true} as="textarea" placeholder="Describa su producto" />
                                    </Form.Group>

                                    <Form.Group controlId="productCategory">
                                        <Form.Label>Categoría</Form.Label>
                                        <Form.Control required={true} as="select" className={'custom-select'} label="Categoría">
                                            <option selected={true} disabled={true}>Seleccione una categoría</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Siguiente
                                    </Button>
                                </Form>

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
    }

}

export default Publicar