import {Container, Row, Col} from 'react-bootstrap';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-light text-dark py-3">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>&copy; {currentYear} E-commerce Store. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;