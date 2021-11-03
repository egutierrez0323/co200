import React,{useState} from 'react';
import {Form, Modal} from 'react-bootstrap';
import DefaultButtom from '../defaultButton/defaultButtom';
import Inputform from '../../components/inputform/inputform2';

const ModalcreateUser = ({show,handleClose, onSend}) => {

    const [nombreform, setNombreform] = useState("");
    const [telefonoform, setTelefonoform] = useState("");
    const [emailform, setEmailform] = useState("");
    const [rolform, setRolform] = useState("");
    const [estadoform, setEstadoform] = useState("");

    const sendData = () => {
        const json = {
            nombre : nombreform,
            telefono : telefonoform,
            rol : rolform,
            email : emailform,
            password : "default",
            estado : estadoform
        };
         console.log(nombreform+telefonoform);
        onSend(json);
        cleardata();
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
                    <Inputform text="Nombre Completo:" value={nombreform} defaultText={"Nombre"} type={1} onChange={(e) => setNombreform(e.target.value)}/>
                    <Inputform text="Teléfono:" value={telefonoform} defaultText={"Telefono"} type={1} onChange={(e) => setTelefonoform(e.target.value)}/>
                    <Inputform text="Email:" value={emailform} defaultText={"Email"} type={1} onChange={(e) => setEmailform(e.target.value)}/>
                    <Inputform text="Rol:" value={rolform} defaultText={"Rol"} type={1} onChange={(e) => setRolform(e.target.value)}/>
                    <Inputform text="Estado:" value={estadoform} defaultText={"Estado"} type={1} onChange={(e) => setEstadoform(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <DefaultButtom typebuttom={1} text={"Registrar Usuario"} onClick={sendData}/>
                    <DefaultButtom typebuttom={2} text={"Close"} onClick={handleClose} />
                </Modal.Footer>
            </Form> 
        </Modal>                  
        </>
    )
}

export default ModalcreateUser
