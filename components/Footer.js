import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faGithub);

const Footer = () => (
    <div className="footer text-center">
        <Container>

                <Row>
                    <Col>
                        <a className="icon" target="_blank" href="https://www.linkedin.com/in/nikitabatlis/" style={{ color: 'black'}}><img alt="logo" src="../static/svg/linkedin-in-brands.svg" width="45" height="35"/></a>
                        <a className="icon" target="_blank" href="https://github.com/NikitaBatlis" style={{ color: 'black'}}><img alt="logo" src="../static/svg/github-brands.svg" width="35" height="35" /></a>
                    </Col>
                </Row>
                <br/>
                <p className="text-muted">Nikita Batlis 2020</p>
        </Container>

        <style jsx>{`

            .icon {
                margin: 0 10px; 
            }

        `}</style>
        
    </div>
)

export default Footer;