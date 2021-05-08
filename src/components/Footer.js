import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import logo from "../assets/logo.png"

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Container className="footer">
            <Row>
                <Col>
                    <div className="heading">See ya around!</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="text">Thanks so much for checking out my website. Please do reach out if you have any questions or just want to chat. 😎</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a className="footerContact" href="https://www.linkedin.com/in/carman-li/" target="_blank">linkedin</a>
                </Col>
                <Col>
                    <a className="footerContact" href="https://github.com/carman-li" target="_blank">github</a>
                </Col>
                <Col>
                    <a className="footerContact" href="mailto: carman.li@uwaterloo.ca" target="_blank">email</a>
                </Col>
            </Row>
            <Row>
                <a onClick={() => scrollToTop()}><img className="logo" src={logo}></img></a>
            </Row>
        </Container>
    )
}
export default Footer;