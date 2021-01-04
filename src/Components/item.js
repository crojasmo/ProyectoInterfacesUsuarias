import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import './item.css';


class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className={"cardItem"}>
                <Card.Img className={"itemImage"} src={this.props.imageSrc || "https://via.placeholder.com/300"} alt="Imagen producto"/>
                <Card.ImgOverlay className={"p-0"}>
                    <Card.Title className={"text-left text-white p-2 itemTitle"}> {this.props.name || "Nombre"} </Card.Title>
                </Card.ImgOverlay>
                <Card.Footer className={"itemFooter p-1"}>
                    <Row className={"justify-content-between"}>
                        <Col className={"text-left text-white mb-0"} style={{display: "flex", alignItems: "center"}} as={"p"}>
                            ${this.props.price || 0}
                        </Col>
                        <Col className={"mx-0 my-0"}>
                            <Button className={"m-0 py-1 px-2 itemButton"}> Comprar </Button>
                        </Col>
                    </Row>
                </Card.Footer>


            </Card>
        );
    }


}

export default Item