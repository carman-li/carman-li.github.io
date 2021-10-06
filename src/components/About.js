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
                    I'm currently in my third year of <span className="bold">Systems Design at UWaterloo</span>. This fall, I'm a <span className="bold">full-stack developer</span> intern at <a href="https://www.pixlee.com/" target="_blank" >Pixlee</a>.
                    <br></br>
                    <br></br>
                    Outside of the classroom, I like playing with my friends' dogs, gaming, and eating goooooood food. Scroll down for some more about my internships & projects!
                </div></Col>

            </Row>
        </Container >
    )
}
export default About;