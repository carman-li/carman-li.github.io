import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProjectCard from './ProjectCard'

import yelpImage from '../assets/projects/yelpRoulette.jpg'
import colourBucketImage from '../assets/projects/colourBucket.png'
import soupThoughtsImage from '../assets/projects/soupThoughts.jpg'

function Projects() {
    return (
        <Container className="projects">
            <Row className="projectCard">
                <Col>
                    <ProjectCard
                        title="Colour Bucket"
                        link="https://github.com/carman-li/colour-bucket"
                        tagline={["// Built with Ionic & Firebase"]}
                        content="Application where users can upload an image and generate a colour palette from it. Users can also search through uploads by hexcode."
                        image={colourBucketImage}
                        imageLayout="left"
                    />
                </Col>
            </Row>
            <Row className="projectCard">
                <Col>
                    <ProjectCard
                        title="Soup Thoughts"
                        tagline={["// Built with Flutter and Firebase", "// Currently on the to-do list!"]}
                        content="Application where I can create and display my personal soup reviews"
                        image={soupThoughtsImage}
                        imageLayout="left"
                    />
                </Col>
            </Row>
            <Row className="projectCard">
                <Col>
                    <ProjectCard
                        title="Yelp Roulette"
                        link="https://github.com/carman-li/yelp-roulette"
                        tagline={["// Built with React"]}
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