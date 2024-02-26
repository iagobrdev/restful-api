import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    
    return (
        <section id="home" className="d-flex flex-column justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col data-aos="fade-in">
                        <div className="home-container">
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}