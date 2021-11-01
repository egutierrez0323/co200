import React, {useState, useEffect} from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from 'axios';
import DefaultTable from '../../components/defaultTable/defaultable';
import DefaultButtom from '../../components/defaultButton/defaultButtom';
import ModalcreateUser from '../../components/modal/modalcreateuser'

const dataMenus = [
    {
        "id"  : 1,
        "col" : "ID"
    },
    {
        "id" : 2,
        "col" : "NOMBRE"
    },
    {
        "id" : 3,
        "col" : "TELEFONO"
    },
    {
        "id" : 4,
        "col": "EMAIL"
    },
    {
        "id" : 5,
        "col": "ROL"
    },
    {
        "id" : 6,
        "col": "ESTADO"
    },
    {
        "id" : 7,
        "col" : "ACTIONS"
    }
]



const GestionUsuarios = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function registerData(data){
        const response = await axios.post("ttp://localhost:3002/api/users/save-user",data);
        if(response.status === 201) {
            listarData();
        }
    }

    async function getUser(user){
        registerData(user);
        handleClose();  
    }

    async function listarData () {
        try{
            const response = await axios.get("http://localhost:3002/api/v1/user/list");
            if(response.status === 200 ){
                const data = response.data;
                setUsers(data)
                console.log(data);

            }
        }catch (e) {
            console.log(e)
        }
    }

    async function deleteData(idUser){
        try{
            const response = await axios.delete(`http://localhost:3002/api/users/delete-user/${idUser}`)
            listarData();
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }

    const [users, setUsers] = useState([]);

    useEffect( () => {
        listarData();
    },[]);


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Gestion de Usuarios</CardTitle>
                                <p className="card-category">
                                Listado de usuarios
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <Card className="card-plain">
                                            <CardHeader>
                                                <CardTitle >
                                                    <div>
                                                        <DefaultButtom typebuttom={1}  text={"Registrar Usuario"}  onClick={handleShow}  />
                                                        <ModalcreateUser  show={show} handleClose={handleClose} onSend={getUser}  />
                                                    </div>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <DefaultTable data={users} dataMenus={dataMenus} option={1} onDeletebuttom={deleteData}/> {/* TABLA DE GESTION DE USUARIOS*/}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>   
        </>
    )
}

export default GestionUsuarios


//const GestionUsuarios = () => {
