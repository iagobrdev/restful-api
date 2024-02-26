import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2" style={{ background: '#EAEDED' }}>
      <Container>
        <Row>
          <Col>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-muted">Copyright &copy; {year} &mdash; iagobrdev </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}