import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import logo from "../assets/logo.png"

function Header() {
    return (
        <Container className="header">
            <Row>
                <img className="logo" src={logo}></img>
            </Row>
        </Container>
    )
}
export default Header;