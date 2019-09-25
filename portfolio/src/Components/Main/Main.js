import React, { Component } from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';


class Main extends Component {

    render(){
        return(
            <>
                <Container>
                    <Row className='main'>
                        <Col xs={10} md={10} lg={12}>
                            <Nav fill variant="tabs" defaultActiveKey="/home">

                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                    Disabled </Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main;