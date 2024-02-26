import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer">
            <Container>
                <div className="text-center py-4">
                    Copyright &copy; {year} &mdash; iagobrdev
                </div>
            </Container>
        </footer>
    );
}