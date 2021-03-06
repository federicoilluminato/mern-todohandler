import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import routes from '../helpers/routes'
import {Link} from 'react-router-dom'
import Image from '../img/task-manager.svg'


const HomePage = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{span: 12}} lg={{ span: 6 }} className="mb-5">
                    <h2>Bienvenid@ a Gestor de tareas</h2>
                    <p>Aca podes gestionar tus proyectos!</p>
                    <p>
                        Marca tus tareas como terminadas, agrega, elimina
                        o actualiza.
                    </p>

                    <div>
                        <Link to={routes.login}>Ingresa</Link> o 
                        <Button as={Link} to={routes.register}
                        className="ml-2"
                        >Crea una cuenta</Button>
                    </div>
                </Col>
                <Col>
                    <img
                        className="img-fluid"
                        src={Image}
                        alt="gestor-de-tareas"
                    />
                    <p>Gestiona tu tiempo, mejora tu productividad</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
 