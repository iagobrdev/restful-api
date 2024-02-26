import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../../services/api';
import img from '../../assets/img/books.png';

export default function Login() {
	const history = useHistory();
	const year = new Date().getFullYear();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	async function login(e) {
		e.preventDefault();

		const data = {
			userName,
			password,
		};

		try {
			const response = await api.post('auth/signin', data);

			localStorage.setItem('username', userName);
			localStorage.setItem('accessToken', response.data.accessToken);

			history.push('/books');
		} catch (err) {
			alert('Login failed, please try again!');
		}
	}

	if(localStorage.getItem('accessToken')) {
        history.push('/books');
    }

    return (
		<Container>
		  <Row className='justify-content-center'>
			<Col xl={4} lg={5} md={7} sm={9}>
			  <WelcomeImage />
			  <LoginFormCard
				userName={userName}
				setUserName={setUserName}
				password={password}
				setPassword={setPassword}
				login={login}
			  />
			  <CopyrightText year={year} />
			</Col>
		  </Row>
		</Container>
	  );
}
	
function WelcomeImage() {
	return (
	<div className='text-center my-5'>
		<img src={img} alt='logo' width='120' />
	</div>
	);
}
	
function LoginFormCard({ userName, setUserName, password, setPassword, login }) {
	return (
	<Card>
		<Card.Body>
		<Card.Title className='text-center'>Welcome</Card.Title>
		<form className='needs-validation' onSubmit={login}>
			<div className='mb-3'>
				<input
					placeholder='Username'
					className='form-control'
					style={{ height: '50px' }}
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</div>
			<div className='mb-3'>
				<input
					type='password'
					placeholder='Password'
					className='form-control'
					style={{ height: '50px' }}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className='d-flex align-items-center justify-content-center'>
				<button
					type='submit'
					className='btn btn-primary'
					style={{ background: '#6610f2', color: '#fff', border: 'solid #6610f2 1px' }}
				>
					Login
				</button>
			</div>
		</form>
		</Card.Body>
		<Card.Footer style={{textAlign: 'center'}}>
			<p><b>Atenção!</b> Para ter acesso ao Username e Password, será necessário entrar em contato através do <a href="https://wa.me/+5555999985378" target="_BLANK">WhatsApp.</a></p>
		</Card.Footer>
	</Card>
	);
}
	
function CopyrightText({ year }) {
	return (
	<div className='text-center mt-5 text-muted'>
		Copyright &copy; {year} &mdash; iagobrdev
	</div>
	);
}