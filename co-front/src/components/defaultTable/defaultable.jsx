import React, {useState} from 'react'
import { Table } from 'react-bootstrap'
import DefaultButtom from '../defaultButton/defaultButtom'
import ModalupdateUser from '../modal/modalupdateuser'
import axios from 'axios'





const DefaultTable = ({data,dataMenus,option,onDeletebuttom}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showmodal = () => {
        console.log(show)
        setShow(true)
    }

    async function deleteData(idUser){
        try{
            const response = await axios.delete(`http://localhost:3002/api/users/delete-user/${data[idUser]._id}`)
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    

    if(option === 1 ){ // retornar opciones de mapeo para la tabla de gestion de usuarios
        return (
            <div className="DefaultTable">
                <Table striped bordered hover>              
                    <thead>
                        <tr>
                            {
                                dataMenus.map( (datos) => (
                                    <th key={datos.id}>
                                        {datos.col}
                                    </th>
                                    )
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
   
                        data.map( (datos,i) => (
                            <tr key={datos._id} >
                                <td>{i+1}</td>
                                <td>{datos.nombre}</td>
                                <td>{datos.telefono}</td>
                                <td>{datos.email}</td>
                                <td>{datos.rol}</td>
                                <td>{datos.estado}</td>                  
                                <td>
                                    <DefaultButtom typebuttom={1} text={"ACTUALIZAR"} onClick={showmodal}/>  <br />
                                    <DefaultButtom typebuttom={2} text={"ELIMINAR"} onClick={() => deleteData(i) } />
                                </td>
                            </tr>
                        ) )
                    }
                    </tbody>
                </Table>
                <ModalupdateUser show={show} handleShow={handleShow} handleClose={handleClose} />
            </div>
        )
    }else if (option === 2 ){ // retornar opciones de mapeo para la tabla de gestion de Productos
        return (
            <div className="DefaultTable">
                <Table striped bordered hover>              
                    <thead>
                        <tr>
                            {
                                dataMenus.map( (datos) => (
                                    <th key={datos.id}>
                                        {datos.col}
                                    </th>
                                    )
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data.map( (datos) => (
                                <tr key={datos._id}>
                                    <td>{datos.id}</td>
                                    <td>{datos.descripcion}</td>
                                    <td>{datos.valoru}</td>
                                    <td>{datos.estado}</td>                  
                                    <td>
                                        <DefaultButtom typebuttom={1} text={"ACTUALIZAR"} onClick={showmodal}/>  <br />
                                        <DefaultButtom typebuttom={2} text={"ELIMINAR"} onclick={onDeletebuttom} />
                                    </td>
                                </tr>
                            ) )
                        }
                    </tbody>
                </Table>
                <ModalupdateUser show={show} handleShow={handleShow} handleClose={handleClose} />
            </div>
        )
    }




    
}

export default DefaultTable
