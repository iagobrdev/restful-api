import React from 'react';
import { BsList } from "react-icons/bs";
import img from '../../assets/img/profile-img.jpg';

export default function NavBar() {

    const navLinks = document.querySelectorAll('.nav-menu a');

	navLinks.forEach(link => {
		link.addEventListener('click', function(event) {
		
			navLinks.forEach(link => {
			    link.classList.remove('active');
        });

		this.classList.add('active');
		});
	});

	return (
		<div>
            <BsList className="bx bx-list mobile-nav-toggle d-xl-none"/>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={img} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="index.html">Teste de Container</a></h1>
                        <div className="social-links mt-3 text-center">
                            <p className="text-light">Sênior Full Stack / Tech Lead</p>
                            <a href="https://github.com/iagobrdev" target="_BLANK" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
                            <a href="https://www.linkedin.com/in/iagobrdev/" target="_BLANK" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#home" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Sobre</span></a></li>
                            <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-bar-chart"></i> <span>Habilidades</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Experiência</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portifólio</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}