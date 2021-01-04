import React from "react";
import {Col} from "react-bootstrap";
import Item from "./item";

class ItemCol extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return <Col className={"mb-3"}>
            <Item name={this.props.name} imgSource={this.props.imgSource} price={this.props.price}/>
        </Col>
    }
}

export default ItemCol