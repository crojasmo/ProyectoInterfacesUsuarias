import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import Form1 from "./form1";


class Form2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
            visibility: this.props.vis,
            validated: false
        }

        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleVisChange = this.handleVisChange.bind(this)
        this.goBack = this.goBack.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()
        let validated = true
        this.setState({validated})

    }

    handlePriceChange(event) {
        this.setState({price: event.target.value})
    }
    handleVisChange(event) {
        this.setState({visibility: event.target.value})
    }

    goBack() {
        this.props.goBack(this.state.price, this.state.visibility)
    }


    render() {
        return <>
            <Form noValidate validated={this.state.validated}>
                <Form.Group controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                $
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="number" required={true} value={this.state.price} onChange={this.handlePriceChange} placeholder="0" />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="visibility">
                    <Form.Label>Visibilidad</Form.Label>
                    <Form.Control required={true} value={this.state.visibility}  onChange={this.handleVisChange} />
                </Form.Group>

                <Form>
                    <Form.File
                        id="custom-file"
                        label="Imagen"
                        data-browse="Buscar"
                        custom
                    />
                </Form>

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
                <Button variant="primary" type="button" onClick={this.goBack}>
                    Atras
                </Button>
                <Button variant="primary" type="submit">
                    Publicar
                </Button>
            </Form>
        </>
    }
}


export default Form2