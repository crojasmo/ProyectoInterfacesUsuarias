import React from 'react';
import Container from "react-bootstrap/cjs/Container";
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import {Col, FormControl, InputGroup, Row,ButtonGroup,Button,Card,Table} from "react-bootstrap";

class Trueque extends React.Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.careers = {}
        this.numbers = [1, 2, 3, 4, 5]
    }
    

    render() {
        
        return <>
         
            <Container fluid={true}>
            <Col>
                <Row><h1>
                    Sus Productos
                </h1>
                
                </Row>
                <br/>
                <br/>
                <Row>
                <ButtonGroup vertical>
                {this.numbers.map(numero =>
                     <Button> {numero}</Button>


                )}

                </ButtonGroup>
                </Row>
                <br/>
               
                <br/>
                
        
            </Col>

        
        
        </Container>  
        </>

    }
}

export default withRouter(Trueque);


