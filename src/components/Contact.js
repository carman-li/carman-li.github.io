import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub, FaSpotify } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'

function Contact() {
    return (
        <Container>
            <Row>
                <Col xs={2} lg={1}>
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <div>
                            <a href="https://www.linkedin.com/in/carman-li/" target="_blank"><FaLinkedinIn className="icon" /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col xs={2} lg={1}>
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <div>
                            <a href="https://github.com/carman-li" target="_blank"><FaGithub className="icon" /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col xs={2} lg={1}>
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <div>
                            <a href="mailto: carman.li@uwaterloo.ca" target="_blank"><GrMail className="icon" /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col xs={2} lg={1}>
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <div>
                            <a href="https://open.spotify.com/user/carman25?si=0ca2ce862b894600" target="_blank"><FaSpotify className="icon" /></a>
                        </div>
                    </IconContext.Provider>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;