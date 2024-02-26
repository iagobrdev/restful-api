import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default function Skills() {
    
    const getYearsFromToday = (date) => {
		const today = new Date();
		const diff = today - date;
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};

    return (
        <section id="skills" className="skills section-bg">
            <Container>
                <div className="section-title">
                    <h2>Habilidades</h2>
                    <p>Conheça um pouco sobre minhas habilidades profissionais como desenvolvedor, elas são medidas de acordo com o tempo de convivência.</p>
                </div>
                <Row>
                    <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                        <ProgressBar
                            now={100}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Java</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2010-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={100}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>HTML</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2010-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={100}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>CSS</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2010-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={100}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>PHP</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2010-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={100}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>JavaScript</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2010-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={100}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>SQL Server / MySQL / PostgreSQL</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2010-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>API RESTful</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>JUnit</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Node.js</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>AWS / Azure</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Git / Versionamento</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                    </Col>
                    <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Spring Boot</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>JWT / Spring Security</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Swagger</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={65}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>React JS / Native</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2016-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={55}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Micro Serviços</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2018-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={55}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Laravel</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2018-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={50}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>MongoDB</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2019-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={50}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Mokito</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2019-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={45}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>RabbitMQ / Kafka</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2020-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={40}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Docker</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2021-01-01'))} anos</span>
                                </div>
                            }
                        />
                        <ProgressBar
                            now={30}
                            sronly="true"
                            label={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{ alignSelf: 'flex-start', marginLeft: '5px', fontSize: '12px'}}>Angular</span>
                                    <span style={{ alignSelf: 'flex-end', marginRight: '5px', fontSize: '12px' }}>{getYearsFromToday(new Date('2023-01-01'))} anos</span>
                                </div>
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}