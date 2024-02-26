import React, { useEffect } from 'react';
import '../../assets/css/style.css';
import '../../assets/js/main.js';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';

import NavBar from './navbar.js';
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import Resume from './resume.js';
import Portfolio from './portfolio.js';
import Footer from './footer.js';

export default function Portifolio() {
	
	useEffect(() => {
		if (!window.location.href.includes('/#home')) {
			window.location.href = '/#home';
		}
	}, []);

	return (
		<div>
			<NavBar/>
				<main id="main">
					<Home/>
					<About/>
					<Skills/>
					<Resume/>
					<Portfolio/>
				</main>
			<Footer/>
		</div>
	);
}