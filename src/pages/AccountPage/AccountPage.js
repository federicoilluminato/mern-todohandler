import React, {  } from 'react'
import {Container,Row,Col, Card, Button} from 'react-bootstrap';
import useAuth from '../../auth/useAuth';
import useModal from '../../hooks/useModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import DeleteModal from './components/DeleteModal';
import ImageAvatar from '../../img/male_avatar.svg'
import EditModal from './components/EditModal';
import ProfilePicModal from './components/ProfilePicModal';


const AccountPage = () => {

    const { user } = useAuth();

    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();
    const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal();

    return (
        <>
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img
                        src={user?.profilePic || ImageAvatar}
                        alt="profile"
                        onClick={openProfilePicModal}
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            cursor: 'pointer',
                        }}
                    />
                </Col>
                <Col className="mt-4">
                        <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                            <p className="text-center"><b>Nombre: </b>{user.name}</p>
                            <p className="text-center"><b>Correo: </b>{user.email}</p>
                            <p className="text-center"><b>Rol: </b>{user.role}</p>

                            <Button variant="warning mt-2"
                            onClick={openEditModal}
                            >
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
        <EditModal
            user={user}
            isOpen={isOpenEditModal}
            close={closeEditModal}
        />
        <ProfilePicModal
            user={user}
            isOpen={isOpenProfilePicModal}
            close={closeProfilePicModal}
        />
        </>
    )
}

export default AccountPage
