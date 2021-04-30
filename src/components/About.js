import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from "../assets/profile1.jpg"

function About() {
    return (
        <Container className="about">
            <Row>
                <Col md={4}>
                    <img className="profilepic" src={profile} alt="Profile" /></Col>
                <Col> <div className="text">
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