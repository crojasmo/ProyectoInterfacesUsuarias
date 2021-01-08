import React from "react";
import {Button, Modal} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class ModalTrueque extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            published: false,
            redirect: false
        }
        this.closeModal = this.closeModal.bind(this)
        this.publish = this.publish.bind(this)
        this.redirect = this.redirect.bind(this)
    }

    closeModal() {
        this.props.closeModal()
    }

    publish() {
        this.setState({published: true})
    }

    redirect() {
        this.setState({redirect: true})
    }

    render () {
        return <>
            {this.state.redirect && <Redirect to={"/"}/>}
            <Modal
                show={this.props.showModal}
                onHide={this.closeModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    {!this.state.published && <>¿estas seguro de realizar esta oferta?</>}
                    {this.state.published && <>Publicado!</>}
                </Modal.Body>
                <Modal.Footer>
                    {!this.state.published && <>
                        <Button variant="primary" onClick={this.publish}>
                            Si
                        </Button>
                        <Button variant="primary" onClick={this.closeModal}>
                            No
                        </Button>
                    </>}
                    {this.state.published && <>
                        <Button variant="primary" onClick={this.redirect}>
                            Volver a inicio
                        </Button>
                        </>}
                </Modal.Footer>
            </Modal>
            </>
    }
}

export default ModalTrueque