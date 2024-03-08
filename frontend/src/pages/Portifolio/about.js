import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img from '../../assets/img/profile-img.jpg';

export default function About() {

    function calcularIdade() {
        const hoje = new Date();
        const nascimento = new Date("1992-10-09");
      
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
      
        // Verifica se ainda não fez aniversário neste ano
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
          idade--;
        }
      
        return idade;
    }
    
    return (
        <section id="about" className="about">
            <Container>
                <div className="section-title">
                    <h2>Sobre</h2>
                    <p style={{ marginTop: '10px', textAlign: 'justify' }}>
                        Sou desenvolvedor de software <b>Full Stack / Tech Lead</b>, apaixonado, bacharel em{' '}
                        <b>Ciência da Computação</b> e com quase <b>15 anos</b> de experiência em criar e implementar soluções inovadoras e eficientes, além de gerir equipes de desenvolvimento, entregando resultados e superando expectativas.
                    </p>
                    <p style={{ marginTop: '10px', textAlign: 'justify' }}>
                        Habilidade comprovada em desenvolvimento <b>frontend</b> e <b>backend</b>, com foco especial em desenvolvimento <b>Java Web</b>. Excelente resolução de problemas e habilidades de trabalho e gestão de equipes, sempre expandindo conhecimentos e contribuindo para o sucesso do time.
                    </p>
                    <p style={{ marginTop: '10px', textAlign: 'justify' }}>
                        Atualmente trabalho como <b>Sênior Full Stack / Tech Lead Java</b>, mas estou em busca de novos desafios para minha vida profissional onde eu possa aplicar todo o conhecimento que possuo e soluções inteligentes para as quais estudo constantemente.
                    </p>
                </div>
                <Row>
                    <Col lg={4} data-aos="fade-right">
                        <Image src={img} fluid alt="profile image" />
                    </Col>
                    <Col lg={8} className="pt-4 pt-lg-0 content" data-aos="fade-left">
                        <Row>
                            <Col lg={6}>
                                <ul>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <strong>Site:</strong> <span>iagobrdev.com.br</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <strong>Telefone:</strong>{' '}
                                    <span>
                                    <a href="https://wa.me/+5555999985378" target="_BLANK" rel="noreferrer">
                                        +55 (55) 9 9998-5378
                                    </a>
                                    </span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <strong>Cidade:</strong> <span>Lucas do Rio Verde / MT</span>
                                </li>
                                </ul>
                            </Col>
                            <Col lg={6}>
                                <ul>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <strong>Idade:</strong> <span>{ calcularIdade() }</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <strong>Nível:</strong> <span>Sênior</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i> <strong>E-mail:</strong>{' '}
                                    <span>
                                    <a href="mailto:iagobertolettiribeiro@gmail.com">iagobertolettiribeiro@gmail.com</a>
                                    </span>
                                </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}