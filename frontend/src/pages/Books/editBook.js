import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import api from '../../services/api';

export default function EditBook(props) {
    const accessToken = localStorage.getItem('accessToken');
    const [id] = useState(props.id);
    const [author, setAuthor] = useState(props.author);
    const [launchDate, setLaunchDate] = useState(new Date(props.launchDate));
    const [price, setPrice] = useState(props.price);
    const [title, setTitle] = useState(props.title);

    // Função para formatar a data no formato adequado (YYYY-MM-DD)
    function formatDate(date) {
        if (!date) return ''; // Caso lançadoDate seja vazio
        return date.toISOString().split('T')[0];
    }
    
    // Manipulador de alteração de data
    function handleDateChange(e) {
        const selectedDate = new Date(e.target.value + 'T00:00:00');
        setLaunchDate(selectedDate);
    }

    async function UpdateBook(e) {
        e.preventDefault();

        const data = {
            id,
            title,
            author,
            launchDate,
            price,
        }

        const config = {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
        };
        
        try {
            await api.put('api/book/v1', data, config);
            props.onClose();
            props.handleUpdateBook();

        } catch (err) {
            console.log(err);
            alert('Error updating the book! Try again!');
        }
    }

    return (
        <Modal show={true} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={UpdateBook}>
                    <Row>
                        <Col md={12} className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Author"
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                            />
                        </Col>
                        <Col md={12} className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Label>Launch Date:</Form.Label>
                            <Form.Control
                                type="date"
                                value={formatDate(launchDate)}
                                onChange={handleDateChange}
                            />
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0.00"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" className="btn" style={{ background: '#6610f2', color: '#fff', border: 'solid #6610f2 1px'}} onClick={UpdateBook}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
}