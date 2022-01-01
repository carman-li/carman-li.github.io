import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from "../assets/profile1.jpg"

function About() {
    return (
        <Container className="about">
            <Row>
                <Col auto>
                    <div className="imageContainer">
                        <img src={profile} className="images" />
                    </div>
                </Col>
                <Col md={7}> <div className="text">
                    I'm currently in my third year of Systems Design at UWaterloo. This fall, I had the fun opportunity to intern as a full-stack developer at <a href="https://www.pixlee.com/" target="_blank" >Pixlee TurnTo</a>.
                    <br></br>
                    <br></br>
                    Outside of the classroom/office, I enjoy gaming with my friends, reading, making playlists, and cooking (and of course eating) goooooood food. Scroll down for some more about my internships & projects!
                </div></Col>

            </Row>
        </Container >
    )
}
export default About;