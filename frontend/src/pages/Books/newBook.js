import React, {useState} from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import './style.css';
import api from '../../services/api';

export default function NewBook(props) {
    const [show, setShow] = useState(false);
    const [author, setAuthor] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [enabled] = useState(1);
    const accessToken = localStorage.getItem('accessToken');
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setAuthor('');
        setLaunchDate('');
        setPrice('');
        setTitle('');
    }

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

	async function createNewBook(e) {
		e.preventDefault();

        const data = {
            title,
            author,
            launchDate,
            price,
            enabled,
        }

        const config = {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
        };
        
        try {
            await api.post('api/book/v1', data, config);
            
            handleClose();
            props.handleUpdateBook();
        } catch (err) {
            alert('Error while recording Book! Try again!');
        }
    }

    return (
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <Button style={{ background: '#6610f2', color: '#fff', border: 'solid #6610f2 1px'}} onClick={handleShow}>
                Add New Book
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={createNewBook}>
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
                                    placeholder="Launch Date"
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
                        <Modal.Footer>
                            <Button type="submit" style={{ background: '#6610f2', color: '#fff', border: 'solid #6610f2 1px'}}>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}