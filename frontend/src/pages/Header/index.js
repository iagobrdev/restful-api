import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import img from '../../assets/img/books.png';

export default function Header(props) {
    const[author, setAuthor] = useState('');
    const history = useHistory();
    const username = localStorage.getItem('username');

    async function logout() {
        localStorage.clear();
        history.push('/login');
    }

    async function searchBook(e) {
        e.preventDefault();
        props.handleSearchBook(author);
    }

    return (
        <div>
          <Navbar expand="lg" bg="light" variant="light">
            <div className="container-fluid">
              <Navbar.Brand href="/books">
                <img src={img} alt="logo" width="50" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent"/>
              <Navbar.Collapse id="navbarSupportedContent">
                <Form onSubmit={searchBook} className="d-flex" style={{marginTop: '5px'}}>
                  <FormControl
                    type="search"
                    placeholder="Search by Author"
                    className="me-2"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <Button variant="outline-dark" type="submit">Search</Button>
                </Form>
                <Nav className="me-auto"></Nav>
                <Dropdown align="end">
                  <Dropdown.Toggle id="navbarDropdown" variant="secondary" style={{background: 'rgba(255,255,255,0.5)', color: 'black', marginTop: '5px'}}>
                    Welcome, {username.toUpperCase()}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
    );
}