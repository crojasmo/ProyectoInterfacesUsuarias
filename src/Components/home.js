import React from "react";
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Item from "./item";


class Home extends React.Component {


    render() {
        return <Container className={"cont mt-3"}>
            <Row className={"row-cols-3 row-cols-lg-5"}>
                <Col>
                        <Item name={"Caracol"} price={"1.500"}/>
                </Col>
                <Col>
                        <Item/>
                </Col>
                <Col>
                        <Item/>
                </Col>
                <Col>
                        <Item/>
                </Col>
            </Row>
        </Container>
    }
}

export default Home
