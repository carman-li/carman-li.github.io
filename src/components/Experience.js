import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Experience() {
    return (
        <Container className="experience">
            <Row>
                <Col lg={2}>
                    <div className="text highlight">
                        Winter 2021
                                    </div>
                </Col>
                <Col lg={4}>
                    <div className="text">
                        <span className="bold">Interac</span> // Innovation Lab Developer
                                     </div>
                </Col>
                <Col lg={6}>
                    <ul className="text">
                        <li>Integrated dynamic QR transactions with e-commerce sites</li>
                        <li>Developed Interac QR payment app (Flutter, Firebase)</li>
                        <li>Built a web platform to support local businesses (Ionic)</li>
                    </ul>
                </Col>
            </Row>
            <Row>
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
                    <ul className="text">
                        <li>Built a tool allowing clients to migrate their existing data to MarketBox</li>
                        <li>Redesigned mobile app features (React Native)</li>
                        <li>Developed REST APIs (Node) so companies can query MarketBox data</li>
                    </ul>
                </Col>
            </Row>
            <Row>
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
                    <ul className="text">
                        <li>Automated data extraction for client forms (C#) to optimize bank document processing</li>
                    </ul>
                </Col>
            </Row>
            <Row >
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
                    <ul className="text">
                        <li>Addressed problem areas on web and mobile applications through build acceptance & regression testing</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default Experience;