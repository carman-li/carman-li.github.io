import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from "../assets/profile1.jpg"

function About() {
    return (
        <Container className="about">
            <Row>
                <Col auto>
                    <Image src={profile} fluid roundedCircle className="profilePic" /></Col>
                <Col md={7}> <div className="text">
                    I'm currently in my third year of Systems Design at UWaterloo. This winter, I had the opportunity to intern as an Innovation Lab Developer at <a href="https://www.interac.ca/en/" target="_blank" >Interac</a>.
                        <br></br>
                    <br></br>
                        Outside of the (virtual) classroom, I like playing with my friends' dogs, gaming, and eating goooooood food. Scroll down for some more about my internships & projects!
                    </div></Col>

            </Row>
        </Container >
    )
}
export default About;