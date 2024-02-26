import React from 'react';
import { Container } from 'react-bootstrap';

export default function Portfolio() {
    
    return (
        <section id="portfolio" className="portfolio section-bg">
            <Container>
                <div className="section-title">
                    <h2>Portfólio</h2>
                    <p style={{ textAlign: 'justify' }}>
                        <b>Importante!</b> Todos os projetos estão divididos em containers criados com o <b>Docker</b> e estão hospedados na <b>AWS</b>.
                    </p>
                    <p>
                        Para ter acesso aos códigos fonte, acesse meu perfil no 
                        <a href="https://github.com/iagobrdev" target="_blank" rel="noopener noreferrer"> GitHub</a>.
                    </p>
                </div>
                <div className="resume-item">
                    <h4>
                        <a href="/login" target="_blank" rel="noopener noreferrer">Integração React & API RESTful Java</a>
                    </h4>
                    <p><em>Clique no link acima para acessar a aplicação.</em></p>
                    <ul style={{ textAlign: 'justify' }}>
                        <li>Esse projeto consiste no consumo através do <b>React.js</b> de uma <b>API RESTful</b> que foi desenvolvida em <b>Java com Spring Boot</b> chamada Books.</li>
                        <li>Nessa API é possível realizar diversas operações, como busca(<b>GET</b>), cadastro(<b>POST</b>), atualização(<b>PUT</b>) e remoção(<b>DELETE</b>).</li>
                        <li>O banco de dados utilizado foi o <b>MySQL</b> e para o mapeamento foi usado o <b>Hibernate</b>.</li>
                        <li>A validação de usuário e senha é baseada em Autenticação com <b>JWT</b> e <b>Spring Security</b>.</li>
                        <li>Foi utilizado o <b>JUnit</b> e o <b>Mockito</b> para realizar os testes unitário e testes de integração.</li>
                        <li>Para documentação da API foi utilizado o <b>Swagger</b>, você pode acessar a documentação clicando <a href="http://localhost:8080/swagger-ui/index.html" target="_BLANK">aqui</a>.</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}