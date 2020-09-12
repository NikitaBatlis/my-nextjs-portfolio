import { Container, Row, Col } from 'react-bootstrap';
import styles from './Projects.module.css'

const Projects = () => (
    
        <section id="portfolio" className={styles.portfolio}>
            <Container>
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-1">Portfolio</h3>
                    <h2 className="mb-5">Recent Projects</h2>
                </div>
                <Row className="no-gutters">
                    <Col className="col-lg-6">
                        <a className={styles.portfolioItem} target="_blank" href="https://nikitabatlis.github.io/Wazoogles-Project/">
                            <div className={styles.caption}>
                                <div className={styles.captionContent}>
                                    <h2>Wazoogles.com online store</h2>
                                    <p>An HTML, CSS, Bootstrap, JS/JQuery student project to redesign the brand Wazoogles online store.</p>
                                </div>
                            </div>
                            <img className={styles.img} src="../static/images/wazoogles_project.jpg" />
                        </a>
                    </Col>

                    <Col className="col-lg-6">
                        <a className={styles.portfolioItem} target="_blank" href="https://nikitabatlis-itunes-search.herokuapp.com/">
                            <div className={styles.caption}>
                                <div className={styles.captionContent}>
                                    <h2>iTunes API Search with React & Express</h2>
                                    <p> A React web app that makes HTTP requests to the iTunes store API and adds favourites to a backend Express API.</p>
                                </div>
                            </div>
                            <img className={styles.img} src="../static/images/itunes_api_react_express.jpg" />
                        </a>
                    </Col>

                    <Col className="col-lg-6">
                        <a className={styles.portfolioItem} target="_blank" href="https://headroom.co.za/">
                            <div className={styles.caption}>
                                <div className={styles.captionContent}>
                                    <h2>Headroom Website</h2>
                                    <p>A Wordpress and graphic design job to create an online therapy portal for South Africa.</p>
                                </div>
                            </div>
                            <img className={styles.img} src="../static/images/headroom.jpg" />
                        </a>
                    </Col>

                    <Col className="col-lg-6">
                        <a className={styles.portfolioItem} target="_blank" href="https://xd.adobe.com/view/7873c7ed-2eb3-4cb6-5971-2ec95f3ca362-0e42/">
                            <div className={styles.caption}>
                                <div className={styles.captionContent}>
                                    <h2>Airline booking Mobile app</h2>
                                    <p>A UX design student project for an airline booking app on mobile.</p>
                                </div>
                            </div><img className={styles.img} src="../static/images/flyUX_project.jpg" /></a>
                    </Col>
                    
                </Row>
            </Container>


        </section>

    
)

export default Projects;
