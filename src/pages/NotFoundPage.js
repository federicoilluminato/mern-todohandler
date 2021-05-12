import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import routes from '../helpers/routes';

const NotFoundPage = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ span: 6, offset: 3}} className="text-center">
                    <img
                        style={{width : '100%'}} 
                        src="/img/404-not-found.svg"
                        alt="error 404"
                    />
                    <h2 className="mt-3">¿Te perdiste?</h2>
                    <p>Volve al <Link to={routes.home}>Inicio</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage
