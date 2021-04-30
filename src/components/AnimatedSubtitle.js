import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

function AnimatedSubtitle() {
    return (
        <Container className="animatedSubtitle heading">
            <Row>
                <Col className="d-none d-lg-block">
                    <span>// btw, I'm looking for a fall 2021 internship right now :) </span>
                </Col>
            </Row>
        </Container>
    )
}
export default AnimatedSubtitle;