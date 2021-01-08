import React from "react";
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import Form1 from "./form1";
import Form2 from "./form2";
import {Redirect} from "react-router-dom";

class Publicar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            category: "0",
            price: "",
            visibility: "",
            validated: false,
            images: [],
            buy: false,
            trueque: false,
            showModal: false,
            redirect: false,
            page: 1}
        this.changePage = this.changePage.bind(this)
        this.goBack = this.goBack.bind(this)
        this.publicar = this.publicar.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    goBack(price, images, trueque, buy) {
        this.setState({price, images, trueque, buy, page:1})
    }
    changePage(name, description, category) {
        this.setState({name, description, category, page:2})
    }



    publicar(price, images, trueque, buy) {
        this.setState({price, images, trueque, buy, showModal: true})
    }

    closeModal() {
        this.setState({showModal: false, redirect: true})
    }

    render() {
        return <>
            {this.state.redirect && <Redirect to={"/"}/>}
            <Modal
                show={this.state.showModal}
                onHide={this.closeModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    El producto ha sido publicado con éxito!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.closeModal}>
                        Ok!
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container>
                <Row>
                    <Col>
                        <Card className={'mt-3'}>
                            <Card.Body>
                            <Card.Title className={'text-left'}>
                                Nuevo Producto
                            </Card.Title>
                                {(this.state.page == 1) && <Form1 name={this.state.name} description={this.state.description} category={this.state.category} updateStates={this.changePage}/>}
                                {(this.state.page == 2) && <Form2 price={this.state.price} vis={this.state.visibility} images={this.state.images} price={this.state.price} buy={this.state.buy} trueque={this.state.trueque} publish={this.publicar} goBack={this.goBack} />}

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
    }

}

export default Publicar