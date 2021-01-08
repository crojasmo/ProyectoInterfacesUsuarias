import React from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Form1 from "./form1";
import Form2 from "./form2";

class Publicar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {validated: false,
            name: "",
            description: "",
            category: "0",
            price: "",
            visibility: "",
            page: 1}
        this.changePage = this.changePage.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    goBack(price, visibility) {
        this.setState({price, visibility, page:1})
    }
    changePage(name, description, category) {
        this.setState({name, description, category, page:2})
    }


    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                        <Card className={'mt-3'}>
                            <Card.Body>
                            <Card.Title className={'text-left'}>
                                Nuevo Producto
                            </Card.Title>
                                {(this.state.page == 1) && <Form1 name={this.state.name} description={this.state.description} category={this.state.category} updateStates={this.changePage}/>}
                                {(this.state.page == 2) && <Form2 price={this.state.price} vis={this.state.visibility} goBack={this.goBack} />}

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
    }

}

export default Publicar