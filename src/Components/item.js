import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import './item.css';
import {Redirect} from "react-router-dom";


class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {redirect: false}
        this.redirect = this.redirect.bind(this)
    }

    redirect() {
        this.props.setProduct()
        this.setState({redirect: true})
    }

    render() {
        return (
            <Card className={"cardItem"}>
                {this.state.redirect && <Redirect to={'/compra'}/>}
                <Card.Img 
                       height={150} className={"itemImage"} src={this.props.imgSource} alt="Imagen producto"/>
                <Card.ImgOverlay className={"p-0"}>
                    <Card.Title className={"text-left text-white p-2 itemTitle"}> {this.props.name || "Nombre"} </Card.Title>
                </Card.ImgOverlay>
                <Card.Footer className={"itemFooter p-1"}>
                    <Row className={"justify-content-between"}>
                        <Col className={"text-left text-white mb-0"} style={{display: "flex", alignItems: "center"}} as={"p"}>
                            ${this.props.price || 0}
                        </Col>
                        <Col className={"mx-0 my-0 pl-0"}>
                            <Button className={"m-0 py-1 px-2 itemButton"} onClick={this.redirect}> Detalles </Button>
                        </Col>
                    </Row>
                </Card.Footer>


            </Card>
        );
    }


}

export default Item