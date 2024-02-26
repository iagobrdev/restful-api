import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume() {
    
    return (
        <section id="resume" className="resume">
            <Container>
                <div className="section-title">
                    <h2>Experiência</h2>
                    <p style={{textAlign: 'justify'}}>
                        Iniciei minha jornada como DEV em 2010, trabalhando como <b>Backend Java PL</b>, no mesmo ano que iniciei o curso de <b>Ciência da Computação</b>, na URI - Universidade Regional Integrada do Alto Uruguai e das Missões (Campus de Frederico Westphalen / RS), nela me tornei bacharel em 2015. Meu TCC (Trabalho de Conclusão de Curso) foi um <b>sistema de reconhecimento facial</b>, desenvolvido em Java onde obtive a nota <b>9.7</b>.
                    </p>
                </div>
                <Row>
                    <Col lg={6} data-aos="fade-up">
                        <h3 className="resume-title">Formação Acadêmica</h3>
                        <div className="resume-item">
                            <h4>Bacharel em Ciência da Computação</h4>
                            <h5>2010 - 2015</h5>
                            <p><em>URI - Universidade Regional Integrada do Alto Uruguai e das Missões (Campus de Frederico Westphalen / RS)</em></p>
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Experiência Profissional</h3>
                        <div className="resume-item">
                            <h4>Sênior Full Stack / Tech Lead no <a href="https://sinahab.com.br" target="_BLANK">SiNaHab</a></h4>
                            <h5>2018 - Atualmente</h5>
                            <p><em>Paraná - BR </em></p>
                            <ul style={{textAlign: 'justify'}}>
                                <li>Em 2018 desenvolvi o Sistema Nacional da Habitação um monolito feito em <b>Laravel / PHP</b> e <b>React</b> que hoje é o principal produto da empresa.</li>
                                <li>Em 2019 desenvolvi a versão mobile do sistema, um app feito em <b>Node</b> e <b>React</b>.</li>
                                <li>Experiência com <b>testes unitário</b> e <b>testes de integração</b>.</li>
                                <li>Controle de versões e manutenção de servidores <b>AWS</b> e <b>Azure</b>.</li>
                                <li>Em 2021 fiz a migração do monolito feito em <b>Laravel</b> para <b>Spring Boot</b>, arquitetura de Micro Serviços baseada em mensageira utilizando o <b>RabbitMQ</b>.</li>
                                <li>Hoje desenvolvo várias <b>API’s RESTful</b> para integração com parceiros e atualizações no sistema.</li>
                                <li>Todas as aplicações estão divididas em containers, utilizo o <b>Docker</b>.</li>
                                <li>Sou <b>Tech Lead</b> da equipe, que atualmente possui 4 (quatro) <b>DEV’s</b>. Trabalhando fortemente para batermos as <b>metas</b> e ao mesmo tempo manter um <b>excelente</b> ambiente de trabalho com as pessoas <b>engajadas</b> e <b>felizes</b>.</li>
                                <li><b>Tecnologias Utilizadas:</b> <i>Java, PHP, JavaScript, Spring Boot, JUnit, Docker, Swagger, RESTFul, SOAP, RabbitMQ, Kafka, Struts, Micro Serviços, Angular, React, Node.JS, MySQL, MongoDB, Oracle, SQL Server, PostgreSQL, Laravel, AWS, Azure, Git, BootStrap, CSS, HTML</i>.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Backend Developer Pleno / Sênior na <a href="https://www.ibrsoft.com" target="_BLANK">iBR Tecnologia</a></h4>
                            <h5>2010 - 2018</h5>
                            <p><em>Rio Grande do Sul - BR </em></p>
                            <ul style={{textAlign: 'justify'}}>
                                <li>Desenvolvi, mantive e atualizei um <b>ERP</b> chamado <b>iBRSFOT</b> que hoje é o principal produto da empresa.</li>
                                <li>Estudei toda a parte fiscal para desenvolver e manter atualizado cada <b>módulo fiscal</b> do <b>ERP</b> (NF-e, NFS-e, CT-e, MDF-e, SPED, SINTEGRA).</li>
                                <li>Em 2014 para atender a lei federal <a href="https://legis.senado.leg.br/norma/584788#:~:text=Regula%20e%20disciplina%20a%20atividade,automotores%20terrestres%3B%20altera%20o%20art." target="_BLANK">nº 12.977</a> desenvolvi em apenas 6(seis) dias o <b>iBRSOFT CDV</b>, sistema voltado para o segmento de desmonte de veículos e o primeiro desmonte do Brasil foi <b>homologado</b> utilizando o <b>iBRSOFT CDV</b>. Hoje a iBR é a maior empresa do Brasil no segmento.</li>
                                <li>Fui o responsável direto pelo desenvolvimento e homologação do <b>TEF</b> e do <b>PAF-ECF</b>. </li>
                                <li>Já construí diversas <b>API’s</b> para comunicação entre os sistemas, possuo experiência com <b>Web Services</b>.</li>
                                <li>Desenvolvi 2(dois) aplicativos <b>mobile</b>, um para <b>pedidos externos</b> e outro para <b>ordens de serviço online</b>, ambos foram desenvolvidos usando <b>Node</b> e <b>React</b>.</li>
                                <li><b>Principais Tecnologias Utilizadas:</b> <i>Java, JasperReports, Servelets, JSP, JavaScript, PHP, HTML, CSS, BootStrap, React, Node, RESTful, JUnit, MySql, PostgreSQL, SQL Server</i>.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}