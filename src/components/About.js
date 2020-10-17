import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className="about">
            <Row>
                <div className="text">
                    Currently, I'm in my third year of Systems Design at UWaterloo. This summer, I had the opportunity to intern as a full stack developer at <a href="https://www.gomarketbox.com/" target="_blank" >MarketBox</a>.
                        <br></br>
                    <br></br>
                        Outside of the (virtual) classroom, I like playing with my friends' dogs, building side projects, and eating goooooood food. Scroll down for some more about my projects & internships!
                    </div>
            </Row>
        </Container >
    )
}
export default About;