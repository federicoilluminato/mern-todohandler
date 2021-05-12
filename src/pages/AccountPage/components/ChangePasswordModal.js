import { useEffect } from 'react';
import {Modal,Form,Alert,Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import changePasswordResolver from '../../../validations/changePasswordResolver';

// VOY POR VIDEO - MERN STACK 23 https://www.youtube.com/watch?v=iiFcpbDOxWA&list=PLdcAPGja1uw0LSn7kx-Plj76x8UZZLgz9&index=25&ab_channel=LuisCabreraLuisCabrera


export default function ChangePasswordModal({isOpen, close}) {

    
    const { register, handleSubmit, formState: { errors }, reset} = useForm({ 
        resolver: changePasswordResolver })
    
    const onSubmit = (formData) => {
        alert("Cambiando contraseña...")
    }

    useEffect(() => {
        if(!isOpen){
            reset()
        }
    },[isOpen])

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control 
                            placeholder="Escribe una nueva contraseña"
                            {...register("password")}
                            type="password"
                        />
                        {errors?.password && (
                        <Form.Text>
                            <Alert variant="danger">
                                {errors.password.message}
                            </Alert>
                        </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>Actualizar contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}
