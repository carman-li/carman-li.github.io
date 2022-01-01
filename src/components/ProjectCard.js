import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProjectCard(props) {
    //imageLayout prop - image goes to left of text on default
    const layout = props.imageLayout === "right";
    const tagline = props.tagline;

    return (
        <Container>
            <Row md={1}>
                {!layout &&
                    <Col lg={6}>
                        <div>
                            <a href={props.link} target="_blank"><img className={props.link ? "projectImageLink" : "projectImage"} src={props.image}></img></a>
                        </div>
                    </Col>
                }

                <Col lg={6}>
                    <div className="heading highlight">{props.title}</div>
                    <div className="text">{props.content}</div>
                    <br></br>
                    {tagline.map((line) => {
                        return <div className="tagline">{line}</div>
                    })}
                    <br></br>
                    {!!props.link && <a className="projectLink text" href={props.link} target="_blank">See More</a>}
                </Col>

                {!!layout &&
                    <Col lg={6}>
                        <a href={props.link} target="_blank"><img className={props.link ? "projectImageLink" : "projectImage"} src={props.image}></img></a>
                    </Col>
                }

            </Row>
        </Container >
    )
}
export default ProjectCard;