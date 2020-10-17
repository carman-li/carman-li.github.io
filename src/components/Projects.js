import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProjectCard from './ProjectCard'

import yelpImage from './yelpRoulette.jpg'
import sliceImage from './slice.png'

function Projects() {
    return (
        <Container className="projects">
            <Row className="projectCard">
                <Col>
                    <ProjectCard
                        title="Slice"
                        tagline="// Built with React Native & MongoDB Stitch endl// Current work in progress!"
                        content="Mobile application that makes it easier for users to split bills with others."
                        image={sliceImage}
                        imageLayout="left"
                    />
                </Col>
            </Row>
            <Row className="projectCard">
                <Col>
                    <ProjectCard
                        title="Yelp Roulette"
                        link="https://github.com/carman-li/yelp-roulette"
                        tagline="// Built with React"
                        content="Web app that randomly selects a restaurant for you based on location and business category."
                        image={yelpImage}
                        imageLayout="left"
                    />
                </Col>
            </Row>
        </Container >
    )
}
export default Projects;