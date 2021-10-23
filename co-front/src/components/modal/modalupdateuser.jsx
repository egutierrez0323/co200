import React from 'react'
import {Form, Modal} from 'react-bootstrap'
import DefaultButtom from '../defaultButton/defaultButtom'


const ModalupdateUser = ({show,handleClose}) => {
    return (
        <>
        <Modal show={show} >
            <Form> 
                <Modal.Header >
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* {AQUI IRA EL FORMULARIO} */}
                    <Form.Group className="mb-3" controlId="id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Telefono" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rol">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Rol" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Estado" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <DefaultButtom typebuttom={1} text={"Save Changes"} onClick={handleClose}  />
                    <DefaultButtom typebuttom={2} text={"Close"} onClick={handleClose} />
                </Modal.Footer>
            </Form> 
        </Modal>                  
        </>
    )
}

export default ModalupdateUser
