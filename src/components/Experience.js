import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Experience() {
    return (
        <Container className="experience">
            <Row>
                <Col lg={2}>
                    <div className="text highlight">
                        Fall 2021
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="text">
                        <span className="bold">Pixlee</span> // Full-Stack Developer
                    </div>
                    <div className="text subtitle">
                        Backbone, Marionette, JavaScript, Rails
                    </div>
                </Col>
                <Col lg={6}>
                    <ul className="text">
                        <li>Developed influencer link tracking feature, used by thousands of brands to drive influencer analytics</li>
                        <li>Built and pitched an award-winning, company-specific linter tool</li>
                        <li>Safely tested and deployed database migrations to production</li>
                    </ul>
                </Col>
            </Row>
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
                    <div className="text subtitle">
                        Flutter, Firebase, Ionic
                    </div>
                </Col>
                <Col lg={6}>
                    <ul className="text">
                        <li>Integrated dynamic QR transactions with e-commerce sites</li>
                        <li>Developed Interac QR payment app for merchants and customers</li>
                        <li>Built a web platform to support over 100 local businesses</li>
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
                    <div className="text subtitle">
                        React, React Native, Node
                    </div>
                </Col>
                <Col lg={6}>
                    <ul className="text">
                        <li>Built a tool allowing clients to migrate their existing data to MarketBox</li>
                        <li>Redesigned mobile app features</li>
                        <li>Developed REST APIs to allow companies to query MarketBox data</li>
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
                        <li>Automated data extraction for client forms to optimize bank document processing using C#</li>
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