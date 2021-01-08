import React from "react";
import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import Form1 from "./form1";
import bsCustomFileInput from 'bs-custom-file-input'


class Form2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
            visibility: this.props.vis,
            validated: false,
            images: [],
            buy: false,
            trueque: false
        }

        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleVisChange = this.handleVisChange.bind(this)
        this.goBack = this.goBack.bind(this)
        this.handleImages = this.handleImages.bind(this)
        this.handleTruequeCheck = this.handleTruequeCheck.bind(this)
        this.handleBuyCheck = this.handleBuyCheck.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()
        let validated = true
        this.setState({validated})
        let state = {...this.state}
        if (state.buy || state.trueque) {
            if  (state.images.length != 0) {
                alert("se ha Publicado el producto")
            }
        }

    }

    handlePriceChange(event) {
        this.setState({price: event.target.value})
    }
    handleVisChange(event) {
        this.setState({visibility: event.target.value})
    }

    handleImages(event) {
        let images = []
        if (event.target.files.length > 3)
            alert("Solo puedes subir maximo 3 imágenes")
        for (let i = 0; i < event.target.files.length; i++) {
            images.push(URL.createObjectURL(event.target.files[i]))
        }

        this.setState({images})

    }

    handleTruequeCheck(event) {
        this.setState({trueque: event.target.checked})

    }

    handleBuyCheck(event) {
        this.setState({buy: event.target.checked})

    }

    goBack() {
        this.props.goBack(this.state.price, this.state.visibility)
    }

    showImages() {
        let renderedImages = this.state.images.map(image => {
            return <>
                <Col className={"col-2"}>
                    <Card style={{Width: "150px"}}>
                        <Card.Img src={image}></Card.Img>
                    </Card>
                </Col>
            </>
        });
        let imagesLeft = 3 - this.state.images.length
        console.log(imagesLeft)
        console.log(renderedImages)
        for (let i = 0; i < imagesLeft; i++) {
            renderedImages.push(<>
                <Col className={"col-2"}>
                    <Card style={{Width: "150px", height: "150px"}}>
                        <Card.Body className={"text-muted"}>Sin imagen</Card.Body>
                    </Card>
                </Col>
            </>)
        }
        console.log(renderedImages)
        return renderedImages
    }


    render() {
        return <>
            <Form id={"fileForm"} onSubmit={this.handleSubmit} noValidate validated={this.state.validated}>
                {/*<Form.Group controlId="productCategory">*/}
                {/*    <Form.Label>Categoría</Form.Label>*/}
                {/*    <Form.Control value={this.state.category} required={true} as="select" onChange={this.handleCategoryChange} isValid={this.state.validated ? !this.state.categoryInvalid : false} isInvalid={this.state.categoryInvalid} className={'custom-select'} label="Categoría">*/}
                {/*        <option value="0" disabled={true}>Seleccione una categoría</option>*/}
                {/*        <option>2</option>*/}
                {/*        <option>3</option>*/}
                {/*        <option>4</option>*/}
                {/*        <option>5</option>*/}
                {/*        <option>6</option>*/}
                {/*    </Form.Control>*/}
                {/*</Form.Group>*/}

                <Row>
                    <Col className={"col-6"}>
                        <Form.Group>
                            <Form.Label>Imágen del producto</Form.Label>
                            <Form.File
                                required={true}
                                id="custom-file"
                                label="Selecciona a lo más 3 imágenes"
                                data-browse="Buscar"
                                custom
                                accept="image/*"
                                onChange={this.handleImages}
                                multiple
                            />
                        </Form.Group>
                    </Col>
                    {this.showImages()}
                </Row>
                <Form.Text>Preferencias de compra y trueque</Form.Text>
                <Form.Check
                    type={"checkbox"}
                    id={`trueqe`}
                    label={'Permitir ofertas de trueque'}
                    onChange={this.handleTruequeCheck}
                    checked={this.state.trueque}
                />
                <Form.Check
                    type={"checkbox"}
                    id={`compra`}
                    label={'Permitir ofertas de Compra'}
                    checked={this.state.buy}
                    onChange={this.handleBuyCheck}
                />
                <Form.Group controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                $
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control disabled={!this.state.buy} type="number" required={true} value={this.state.price} onChange={this.handlePriceChange} placeholder="0" />
                    </InputGroup>
                </Form.Group>
                <Button variant="primary" type="button" onClick={this.goBack}>
                    Atrás
                </Button>
                <Button variant="primary" type="submit">
                    Publicar
                </Button>
            </Form>
        </>
    }
}


export default Form2