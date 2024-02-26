import React, {useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowRightCircle, BsArrowLeftCircle, BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import NewBook from './newBook';
import EditBook from './editBook';
import Footer from '../Footer';
import { startData, startDataSearch, nextPage, previousPage, updateRefresh, deleteBooks } from './utils';

export default function Books() {
    let [books, setBooks] = useState([]);
    let [totalPages, setTotalPages] = useState(0);
    let [nextpage, setNextPage] = useState(0);
    let [previouspage, setPreviousPage] = useState(0);
    let [page, setPage] = useState(0);
    const [selectedBook, setSelectedBook] = useState(null);

    const openModal = (book) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    useEffect(() => {
        if(totalPages === 0) {
            startData({
                setBooks, 
                setTotalPages, 
                setNextPage,
                setPreviousPage,
                setPage
            });
        }
    }, [totalPages]); 

    function handleUpdateBook() {
        updateRefresh({
            setBooks, 
            setTotalPages, 
            setNextPage,
            setPreviousPage,
            setPage,
            page
        });
    }

    function handleSearchBook(author) {
        
        if(author !== '') {
            startDataSearch({
                setBooks, 
                setTotalPages, 
                setNextPage,
                setPreviousPage,
                setPage,
                author
            });
        }
        else {
            startData({
                setBooks, 
                setTotalPages, 
                setNextPage,
                setPreviousPage,
                setPage
            });
        }
    }

    return (
        <div>
            <Header handleSearchBook={handleSearchBook} />
            <NewBook handleUpdateBook={handleUpdateBook} />
                {selectedBook && (
                    <EditBook
                    id={selectedBook.id}
                    author={selectedBook.author}
                    title={selectedBook.title}
                    price={selectedBook.price}
                    launchDate={selectedBook.launchDate}
                    onClose={closeModal}
                    handleUpdateBook={handleUpdateBook}
                    />
                )}
            <Container className="py-4">
                <h3 className="text-center">Registered Books</h3>
                <Row className="row-cols-1 row-cols-md-2 g-4">
                    {books.map((book, index) => (
                    <Col md={4} key={index}>
                    <Card className="h-100 p-3 m-2">
                        <div className="container">
                        <Row>
                            <Col md={12}>
                            <h5 className="card-title">{book.title}</h5>
                            </Col>
                            <Col md={12}>
                            <h6 className="card-subtitle text-muted">Author: {book.author}</h6>
                            </Col>
                            <Col md={6} className="text-start">
                            <p className="p-y-1">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}
                            </p>
                            </Col>
                            <Col md={6} className="text-md-end text-start">
                            <p className="p-y-1">{new Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>
                            </Col>
                        </Row>
                        </div>
                        <div className="mt-auto text-center">
                        <Button
                            onClick={() => openModal(book)}
                            type="button"
                            style={{ borderRadius: '8px', background: '#2980B9', color: '#fff', border: 'solid #2980B9 1px' }}
                            className="m-2"
                        >
                            <BsFillPencilFill style={{fontSize: '15px'}}/>
                        </Button>
                        <Button
                            type="button"
                            onClick={() =>
                            deleteBooks({
                                setBooks,
                                setTotalPages,
                                setNextPage,
                                setPreviousPage,
                                setPage,
                                book,
                            })
                            }
                            style={{ borderRadius: '8px', background: '#2980B9', color: '#fff', border: 'solid #2980B9 1px' }}
                            className="m-2"
                        >
                            <BsFillTrash3Fill style={{fontSize: '15px'}}/>
                        </Button>
                        </div>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
            <Container className="text-center my-5">
                <label style={{ fontSize: '14px' }}>Pagination</label>
                <br />
                <Button
                style={{ borderRadius: '8px', background: '#C0392B', color: '#fff', border: 'solid #C0392B 1px' }}
                className="btn btn-primary btn-sm m-2"
                onClick={() =>
                    previousPage({
                    setBooks,
                    setTotalPages,
                    setNextPage,
                    setPreviousPage,
                    setPage,
                    previouspage,
                    })
                }
                >
                <BsArrowLeftCircle style={{fontSize: '20px'}}/>
                </Button>
                <Button
                style={{ borderRadius: '8px', background: '#C0392B', color: '#fff', border: 'solid #C0392B 1px' }}
                className="btn btn-primary btn-sm m-2"
                onClick={() =>
                    nextPage({
                    setBooks,
                    setTotalPages,
                    setNextPage,
                    setPreviousPage,
                    setPage,
                    nextpage,
                    totalPages,
                    })
                }
                >
                <BsArrowRightCircle style={{fontSize: '20px'}}/>
                </Button>
            </Container>
            <Footer/>
        </div>
    );
}