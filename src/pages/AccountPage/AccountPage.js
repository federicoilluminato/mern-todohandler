import React, {  } from 'react'
import {Container,Row,Col, Card, Button} from 'react-bootstrap';
import useAuth from '../../auth/useAuth';
import useModal from '../../hooks/useModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import DeleteModal from './components/DeleteModal';


const AccountPage = () => {

    const { user } = useAuth();

    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();

    return (
        <>
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img
                        src="/img/male_avatar.svg"
                        alt="profile"
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
                <Col className="mt-4">
                        <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                            <p className="text-center"><b>Nombre: </b>{user.name}</p>
                            <p className="text-center"><b>Correo: </b>{user.email}</p>
                            <p className="text-center"><b>Rol: </b>{user.role}</p>

                            <Button variant="warning mt-2">
                                Editar Cuenta
                            </Button>
                            <Button variant="primary" className="mt-2"
                             onClick={openChangePasswordModal}>
                                Cambiar Contraseña
                            </Button>
                            <Button variant="danger" className="mt-2"
                             onClick={openDeleteModal}>
                                Eliminar Cuenta
                            </Button>
                        </Card>
                </Col>
            </Row>
        </Container>
        <DeleteModal 
            isOpen={isOpenDeleteModal}
            close={closeDeleteModal}
        />

        <ChangePasswordModal 
            isOpen={isOpenChangePasswordModal}
            close={closeChangePasswordModal}
        />
        </>
    )
}

export default AccountPage
