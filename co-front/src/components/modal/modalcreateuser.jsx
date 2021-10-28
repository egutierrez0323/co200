import React,{useState} from 'react';
import {Form, Modal} from 'react-bootstrap';
import DefaultButtom from '../defaultButton/defaultButtom';
import Inputform from '../../components/inputform/inputform';

const ModalcreateUser = ({show,handleClose, onSend}) => {

    const [nombreform, setNombreform] = useState('');
    const [telefonoform, setTelefonoform] = useState('');
    const [emailform, setEmailform] = useState('');
    const [rolform, setRolform] = useState('');
    const [estadoform, setEstadoform] = useState('');

    function senData(){
        const json = {
            nombre : nombreform,
            telefono : telefonoform,
            email : emailform,
            rol : rolform,
            estado : estadoform
        };
        onSend(json)
        cleardata()
    }

    function cleardata(){
        setNombreform('');
        setTelefonoform('');
        setEmailform('');
        setRolform('');
        setEstadoform('');
    }


    return (
        <>
        <Modal show={show} >
            <Form method="post" > 
                <Modal.Header >
                    <Modal.Title>Crear Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* {AQUI IRA EL FORMULARIO} */}
                    <Inputform value={nombreform} defaultText={"Nombre"} type={1} onChange={(e) => setNombreform(e.target.value)}/>
                    <Inputform value={telefonoform} defaultText={"Telefono"} type={1} onChange={(e) => setTelefonoform(e.target.value)}/>
                    <Inputform value={emailform} defaultText={"Email"} type={1} onChange={(e) => setEmailform(e.target.value)}/>
                    <Inputform value={rolform} defaultText={"Rol"} type={1} onChange={(e) => setRolform(e.target.value)}/>
                    <Inputform value={estadoform} defaultText={"Estado"} type={1} onChange={(e) => setEstadoform(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <DefaultButtom typebuttom={1} text={"Registrar Usuario"} onClick={onSend ? senData : undefined}  />
                    <DefaultButtom typebuttom={2} text={"Close"} onClick={handleClose} />
                </Modal.Footer>
            </Form> 
        </Modal>                  
        </>
    )
}

export default ModalcreateUser
