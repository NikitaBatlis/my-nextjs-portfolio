import { Container, Row, Col, Button } from 'react-bootstrap';


const About = () => (

    <div>

    <section id="about" className="content-section bg-light">
        <Container className="text-center">
            <Row>
                <Col className="col-lg-10 mx-auto">
                    <h2>I strive to create beautiful, user-centered products.</h2>
                    <p className="lead">Raised in Cape Town, South Africa -
                        <br/>I am an empathetic user advocate and tech enthusiast,
                        <br/>with a diverse background of experience and industry skills.</p>

                    <a target="_blank" href="../static/pdf/Nikita_Batlis_Resume_2020.pdf"><Button variant="info" size="lg">Download full Resume</Button></a>
                </Col>
            </Row>
        </Container>
    </section>

    <section id="skills" className="content-section bg-info text-white text-center">
            <Container>
                <div className="content-section-heading">
                    <h3 className="text-light mb-0">SKILLS</h3>
                    <h2 className="mb-5">What I do</h2>
                </div>
                <Row>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <h4><strong>Web Development</strong></h4>
                        <ul className="list-unstyled">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript/JQuery</li>
                            <li>MERN Stack</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <h4><strong>UX/UI Design</strong></h4>
                        <ul className="list-unstyled">
                            <li>User research</li>
                            <li>Analysis</li>
                            <li>Ideation</li>
                            <li>Prototyping</li>
                            <li>Wireframing</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <h4><strong>Graphic Design</strong></h4>
                        <ul className="list-unstyled text-center">
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Mock Ups</li>
                            <li>Branding</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <h4><strong>Photography</strong></h4>
                        <ul className="list-unstyled">
                            <li>Adobe Lightroom</li>
                            <li>Creative Direction</li>
                            <li>Portraiture</li>
                            <li>Product Photography</li>
                            <li>Real Estate Photography</li>
                        </ul>
                    </div>
                </Row>
            </Container>
    </section>

    <style jsx>{`

        #about {
            padding: 6rem 0;
        }

        #skills {
            padding: 5rem 0;
        }

    `}</style>

    </div>

)

export default About;