<<<<<<< HEAD

import React, {useState} from 'react'
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table,Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function GestionUsuarios(){
=======
import React, {useState} from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table,Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import DefaultTable from '../../components/defaultTable/defaultable';


const GestionUsuarios = () => {
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4

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

<<<<<<< HEAD

=======
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4
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
<<<<<<< HEAD
                                                    <form class="form-inline">
                                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                                        </button>
                                                    </form>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                            <Table class="table">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Nombre Completo</th>
                                                    <th scope="col">Teléfono</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Rol</th>
                                                    <th scope="col">Estado</th>
                                                    <th scope="col">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map(elemento=>(
                                                        <tr>
                                                            <td>{elemento.id}</td>
                                                            <td>{elemento.nombre}</td>
                                                            <td>{elemento.telefono}</td>
                                                            <td>{elemento.email}</td>
                                                            <td>{elemento.rol}</td>
                                                            <td>{elemento.estado}</td>
                                                            <td>
                                                                <a href="#" title="Editar">
                                                                    <box-icon name='edit' color="green" onClick={()=>seleccionarUsuario(elemento, 'Editar')}></box-icon>
                                                                </a>
                                                                <a href="#" title="Eliminar">
                                                                    <box-icon name='trash' color="red" onClick={()=>seleccionarUsuario(elemento, 'Eliminar')}></box-icon>  
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        ))
                                                     }
                                                </tbody>
                                            </Table>
=======
                                                    <div>
                                                        
                                                    </div>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <DefaultTable/> {/* TABLA DE GESTION DE USUARIOS*/}
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
<<<<<<< HEAD
                <Modal isOpen={modalEditar}>
                    <ModalHeader>
                    <div>
                        <h3>Editar Usuario</h3>
                    </div>
                    </ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={usuarioSeleccionado && usuarioSeleccionado.id}
                        />
                        <br />

                        <label>Nombre</label>
                        <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Teléfono</label>
                        <input
                        className="form-control"
                        type="tel"
                        name="telefono"
                        value={usuarioSeleccionado && usuarioSeleccionado.telefono}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Email</label>
                        <input
                        className="form-control"
                        type="email"
                        name="minutos"
                        value={usuarioSeleccionado && usuarioSeleccionado.email}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Rol</label>
                        <input
                        className="form-control"
                        type="text"
                        name="rol"
                        value={usuarioSeleccionado && usuarioSeleccionado.rol}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Estado</label>
                        <input
                        className="form-control"
                        type="text"
                        name="estado"
                        value={usuarioSeleccionado && usuarioSeleccionado.estado}
                        onChange={handleChange}
                        />
                        <br />
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>editar()}>
                        Actualizar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={()=>setModalEditar(false)}
                    >
                        Cancelar
                    </button>
                    </ModalFooter>
                </Modal>

=======
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4

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
