import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Experience() {
    return (
        <Container className="experience">
            <Row className="experienceRow">
                <Col lg={2}>
                    <div className="text highlight">
                        Summer 2020
                                    </div>
                </Col>
                <Col lg={4}>
                    <div className="text">
                        <span className="bold">Marketbox</span> // Full Stack Developer
                                     </div>
                </Col>
                <Col lg={6}>
                    <div className="text">
                        Built a data migration tool, redesigned mobile app features (React Native), and developed REST APIs (Node)
                                    </div>
                </Col>
            </Row>
            <Row className="experienceRow">
                <Col lg={2}>
                    <div className="text highlight">
                        Fall 2019
                                    </div>
                </Col>
                <Col lg={4}>
                    <div className="text">
                        <span className="bold">Scotiabank</span> // Software Developer
                                    </div>
                </Col>
                <Col lg={6}>
                    <div className="text">
                        Automated data extraction for client forms (C#) to optimize bank document processing
                                    </div>
                </Col>
            </Row>
            <Row className="experienceRow">
                <Col lg={2}>
                    <div className="text highlight">
                        Winter 2019
                                    </div>
                </Col>
                <Col lg={4}>
                    <div className="text">
                        <span className="bold">Equitable Bank</span> // QA Analyst
                                    </div>
                </Col>
                <Col lg={6}>
                    <div className="text">
                        Addressed problem areas on web and mobile applications through build acceptance & regression testing
                                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Experience;