import React from "react";
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Item from "./item";
import ItemCol from "./itemCol";


class Home extends React.Component {


    render() {
        return <Container className={"cont mt-3"}>
            <Row className={"row-cols-3 row-cols-lg-4 row-cols-xl-5"}>
                <ItemCol name={"Caracol"} price={"1.500"}/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>             <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>             <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>             <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>             <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>             <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
                <ItemCol/>
            </Row>
        </Container>
    }
}

export default Home
