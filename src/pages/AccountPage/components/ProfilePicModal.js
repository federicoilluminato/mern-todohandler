import { useState } from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
import useAuth from '../../../auth/useAuth';
import { toast } from 'react-toastify';

export default function ProfilePicModal({isOpen, close}) {
    const { updateUser } = useAuth();
    const [fileName, setFileName] = useState("Subir una Imagen")
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = e => {
        const [file] = e.target.files
        const SIZE_25MB = (25 * 1024 * 1024) / 2
        const isValidSize = file.size < SIZE_25MB;
        const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i; //Expresion regular para saber si el nombre de un archivo termina en .jpg jpeg gif o png
        const isValidType = isNameOfOneImageRegEx.test(file.name)

        if(!isValidSize) return toast.error("Imagen muy pesada, máximo 25mb")
        if(!isValidType) return toast.error("Solo se puede subir imágenes")

        setFileName(file.name)
        
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)        
    }

    const handleUpdateProfilePic = () => {
        if(!selectedFile) return toast.error('Debes seleccionar una nueva imágen');
        updateUser({profilePic: selectedFile})
        close()
    }


    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar foto de perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.File 
                        custom
                        label={fileName}
                        data-browse="Subir"
                        onChange={handleFileChange}
                        accept=".jpg, .jpeg, .gif, .png"
                    />
                </Form>

                <img
                    className="img-fluid mt-2"
                    src={selectedFile}
                    alt="profile-preview"
                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancelar</Button>
                <Button variant="primary" onClick={handleUpdateProfilePic}>Actualizar imagen</Button>
            </Modal.Footer>
        </Modal>
    )
}

//Voy por el 24
