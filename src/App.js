import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header'
import SectionHeading from './components/SectionHeading'
import AnimatedSubtitle from './components/AnimatedSubtitle'
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (
    <Container fluid className="all">
      {/* <Row md={1}>
        <Col>
          <Header />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <Container className="app">
            <Row>
              <Col>
                <Landing />
              </Col>
            </Row>
            <Row>
              <Col>
                <AnimatedSubtitle />
              </Col>
            </Row>
            <Row>
              <Col>
                <About />
              </Col>
            </Row>
            <Row>
              <Col>
                <SectionHeading content="Technical Skills" />
                <Skills />
              </Col>
            </Row>
            <Row md={1}>
              <Col>
                <SectionHeading content="Internships" />
                <Experience />
              </Col>
            </Row>
            <Row>
              <Col>
                <SectionHeading content="Projects" />
                <Projects />
              </Col>
            </Row>

          </Container>
        </Col>
      </Row>
      <Row md={1}>
        <Col className="footerCol">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
