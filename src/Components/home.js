import React from "react";
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Item from "./item";
import ItemCol from "./itemCol";


class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    prepareForSet(product) {
        this.props.setProduct(product)
    }
    generateProducts() {
        return this.props.productData.map(product => {
        return <ItemCol setProduct={this.prepareForSet.bind(this, product)} name={product.name} price={product.price} imgSource={product.images[0]}/>
        })

    }


    render() {
        return <Container className={"cont mt-3"}>
            <Row className={"row-cols-3 row-cols-lg-4 row-cols-xl-5"}>
                <ItemCol setProduct={this.props.setProduct} name={"Caracol"} price={"1.500"}/>
                {this.generateProducts()}
            </Row>
        </Container>
    }
}

export default Home
