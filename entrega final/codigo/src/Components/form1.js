import React from "react";
import {Button, Form} from "react-bootstrap";


class Form1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {validated: false,
            name: props.name,
            description: props.description,
            category: props.category,
            nameInvalid: false,
            descInvalid: false,
            categoryInvalid: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescChange = this.handleDescChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()
        let nameInvalid = false, descInvalid =  false, categoryInvalid = false
        if (this.state.name == "")
            nameInvalid = true
        if (this.state.description == "")
            descInvalid = true
        if (this.state.category == "0")
            categoryInvalid = true
        if (!(nameInvalid || descInvalid || categoryInvalid)) {
            this.props.updateStates(this.state.name, this.state.description, this.state.category)
        }
        let validated = true
        this.setState({nameInvalid,descInvalid,categoryInvalid, validated})

    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }
    handleDescChange(event) {
        this.setState({description: event.target.value})
    }
    handleCategoryChange(event) {
        this.setState({category: event.target.value})
    }

    render () {
        return <Form noValidate onSubmit={this.handleSubmit}>
            <Form.Group controlId="productName">
                <Form.Label>Nombre Producto</Form.Label>
                <Form.Control required={true} value={this.state.name} isValid={this.state.validated ? !this.state.nameInvalid : false} onChange={this.handleNameChange} isInvalid={this.state.nameInvalid} type="text" placeholder="Obligatorio" />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control required={true} value={this.state.description} isValid={this.state.validated ? !this.state.descInvalid : false} onChange={this.handleDescChange} isInvalid={this.state.descInvalid} as="textarea" placeholder="Obligatorio" />
            </Form.Group>

            <Form.Group controlId="productCategory">
                <Form.Label>Categoría</Form.Label>
                <Form.Control value={this.state.category} required={true} as="select" onChange={this.handleCategoryChange} isValid={this.state.validated ? !this.state.categoryInvalid : false} isInvalid={this.state.categoryInvalid} className={'custom-select'} label="Categoría">
                    <option value="0" disabled={true}>Seleccione una categoría</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Siguiente
            </Button>
        </Form>
    }

}


export default Form1