import React, {useState} from 'react'
import { Table } from 'react-bootstrap'
import DefaultButtom from '../defaultButton/defaultButtom'
import ModalupdateUser from '../modal/modalupdateuser'

const data = [
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
        "id" : 5,
        "col": "ESTADO"
    },
    {
        "id" : 4,
        "col" : "ACTIONS"
    }
]




const DefaultTable = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showmodal = () => {
        console.log(show)
        setShow(true)
    }

    return (
        <div className="DefaultTable">
            <Table striped bordered hover>
                
                <thead>
                    <tr>
                        {
                            data.map( (datos) => (
                                <th key={datos.id}>
                                    {datos.col}
                                </th>
                                )
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td >EMMANUEL YODERA</td>
                        <td>3105249121</td>
                        <td>EMMANUELYODERA@GMAIL.COM</td>
                        <td>ADMINISTRADOR</td>
                        <td>ACTIVO</td>
                        <td>
                            <DefaultButtom typebuttom={1} text={"ACTUALIZAR"} onClick={showmodal}/>  <br />
                            <DefaultButtom typebuttom={2} text={"ELIMINAR"}/>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <ModalupdateUser show={show} handleShow={handleShow} handleClose={handleClose} />
        </div>
    )
}

export default DefaultTable
