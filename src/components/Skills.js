import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import typingCat from "../assets/typingCat.gif"

function Skills() {
    return (
        <Container className="skills">
            <Row>
                <Col lg={10}>
                    <Row>
                        <Col>
                            <div className="text"><span className="highlight">Languages:</span> JavaScript, Typescript, Python, C++, Dart, SQL</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="text"><span className="highlight">Frameworks & Tools:</span> React, React Native, Ionic, Flutter, Backbone, Marionette, Rails, Firebase, Node, Jest, Git</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={2}>
                    <div className="imageContainer">
                        <img src={typingCat} className="images" />
                    </div>
                </Col>
            </Row>
        </Container >
    )
}
export default Skills;