import React from 'react';
import Contact from './Contact'
import { Container, Row, Col } from 'react-bootstrap';

function Landing() {
    return (
        <Container className="landing">
            <Row>
                <Col>
                    <Contact />
                </Col>
            </Row>
            <Row>
                <div>
                    <div className="title">Hi! I'm <span className="highlight">Carman</span>, an aspiring developer and engineering student. 👩‍💻</div>
                </div>
            </Row>
        </Container>
    )
}
export default Landing;