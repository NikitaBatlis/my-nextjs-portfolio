import Link from 'next/link';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import styles from './Header.module.css'


const Header = () => (
    
    <Jumbotron fluid className={styles.jumbotron}>
        <Container>
            <Row className="justify-content-center">
                <Col lg={{ span: 4, offset: 6 }}>
                    <div className={styles.headingDiv}>
                        <h1 className={styles.h1}>Hi, I'm Nikita.</h1>
                        <h4 className="text-light">A Full Stack Web Developer and UX/UI Designer</h4>
                    </div>           
                    <Link href="/portfolio"><Button variant="info" size="lg">View Portfolio</Button></Link>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)

export default Header;