import React, {useState} from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table,Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import DefaultTable from '../../components/defaultTable/defaultable';


const GestionUsuarios = () => {

const dataUsuarios = [
    {id: 1, nombre: "Paula Alejandra Saavedra", telefono: "3178486269", email: "paulaalejandra95@gmail.com", rol: "Ventas", estado: "Autorizado"},
    {id: 2, nombre: "Mariana Gómez Betancur", telefono: "3218972347", email: "marisgob777@hotmail.com", rol: "Ventas", estado: "Autorizado"},
    {id: 3, nombre: "Michael Mosquera", telefono: "3178670312", email: "mosqueraruiz@gmail.com", rol: "Administrador", estado: "Autorizado"},
];

const [data, setData] = useState(dataUsuarios);
const [modalEditar, setModalEditar] = useState(false);
const [modalEliminar, setModalEliminar] = useState(false);
const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: '',
    nombre:'',
    telefono:'',
    email:'',
    rol: '',
    estado:'',
});

const seleccionarUsuario=(elemento,caso)=>{
    setUsuarioSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
}

const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(usuario=>{
      if(usuario.id===usuarioSeleccionado.id){
        usuario.nombre=usuarioSeleccionado.nombre;
        usuario.telefono=usuarioSeleccionado.telefono;
        usuario.email=usuarioSeleccionado.email;
        usuario.rol=usuarioSeleccionado.rol;
        usuario.estado=usuarioSeleccionado.estado;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(usuario=>usuario.id!==usuarioSeleccionado.id));
    setModalEliminar(false);
  }

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Gestion de Usuarios</CardTitle>
                                <p className="card-category">
                                Listado de usuarios{" "}
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <Card className="card-plain">
                                            <CardHeader>
                                                <CardTitle >
                                                    <div>
                                                        
                                                    </div>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <DefaultTable/> {/* TABLA DE GESTION DE USUARIOS*/}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal isOpen={modalEliminar}>
                    <ModalBody>
                    ¿Estás Seguro que deseas eliminar el usuario? {usuarioSeleccionado && usuarioSeleccionado.nombre}
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>eliminar()}>
                        Sí
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={()=>setModalEliminar(false)}
                    >
                        No
                    </button>
                    </ModalFooter>
                </Modal>

                

            </div>   
        </>
    )
                                   
                        }

export default GestionUsuarios


//const GestionUsuarios = () => {
