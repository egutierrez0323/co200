import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Table } from "reactstrap";

const dataProductos = [
  {
    id: 1,
    Producto: "Balon",
    Categoria: "Juegueteria",
    Valor: 100000,
    Existencias: 10,
  },
  {
    id: 2,
    Producto: "Martillo",
    Categoria: "Herramientas",
    Valor: 250000,
    Existencias: 5,
  },
  {
    id: 3,
    Producto: "Bici",
    Categoria: "Vehiculos",
    Valor: 750000,
    Existencias: 20,
  },
  {
    id: 4,
    Producto: "Refresco Lima",
    Categoria: "Comsumibles",
    Valor: 5000,
    Existencias: 30,
  },
  {
    id: 5,
    Producto: "Hamburguesa",
    Categoria: "Comsumibles",
    Valor: 30000,
    Existencias: 50,
  },
  {
    id: 6,
    Producto: "Carro",
    Categoria: "Vehiculos",
    Valor: 50000000,
    Existencias: 15,
  },
  {
    id: 7,
    Producto: "Laptop",
    Categoria: "Tecnologia",
    Valor: 2500000,
    Existencias: 23,
  },
  {
    id: 8,
    Producto: "SmartPhone",
    Categoria: "Tecnologia",
    Valor: 800000,
    Existencias: 36,
  },
  {
    id: 9,
    Producto: "Silla",
    Categoria: "Hogar",
    Valor: 75000,
    Existencias: 14,
  },
];

function TableProd() {
  const [data, setData] = useState(dataProductos);
  const [modalEditar, setModaleditar] = useState(false);

  const [prodSeleccionado, setProdSelecionado] = useState({
    id: '',
    Producto: '',
    Categoria: '',
    Valor: '',
    Existencias: '',
  });

  const selecionarProducto=(elemento, caso) => {
      setProdSelecionado(elemento);
      (caso==='Editar')&&setModaleditar(true)
  }

  const handleChange=e=>{
      const {name, value} = e.target;
      setProdSelecionado((prevState)=>({
          ...prevState,
          [name]: value
      }));
  }

  const editar=()=>{
      var dataNueva=data;
      dataNueva.map((prod) => {
          if(prod.id===prodSeleccionado.id){
              prod.Producto=prodSeleccionado.Producto;
              prod.Categoria=prodSeleccionado.Categoria;
              prod.Valor=prodSeleccionado.Valor;
              prod.Existencias=prodSeleccionado.Existencias;
          }
      });
      setData(dataNueva);
      setModaleditar(false);
  }

  return (
    <>
      <div>
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </nav>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Existencias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.Producto}</td>
              <td>{elemento.Categoria}</td>
              <td>{elemento.Valor}</td>
              <td>{elemento.Existencias}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>selecionarProducto(elemento, 'Editar')}>Editar</button> {"  "}
                <button className="btn btn-danger">Eliminar</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalEditar}>
                    <ModalHeader>
                    <div>
                        <h3>Editar Usuario</h3>
                    </div>
                    </ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label>Id</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={prodSeleccionado && prodSeleccionado.id}
                        />
                        <br />

                        <label>Producto</label>
                        <input
                        className="form-control"
                        type="text"
                        name="producto"
                        value={prodSeleccionado && prodSeleccionado.Producto}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Categoria</label>
                        <input
                        className="form-control"
                        type="text"
                        name="categoria"
                        value={prodSeleccionado && prodSeleccionado.Categoria}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Valor</label>
                        <input
                        className="form-control"
                        type="number"
                        name="valor"
                        value={prodSeleccionado && prodSeleccionado.Valor}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Existencias</label>
                        <input
                        className="form-control"
                        type="number"
                        name="existencia"
                        value={prodSeleccionado && prodSeleccionado.Existencias}
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
                        className="btn btn-danger" onClick={()=>setModaleditar(false)}>
                        Cancelar
                    </button>
                    </ModalFooter>
                </Modal>


                {/* <Modal isOpen={modalEliminar}>
                    <ModalBody>
                    ¿Estás Seguro que deseas eliminar el Producto {prodSeleccionado && prodSeleccionado.nombre}?
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
                </Modal> */}
      
    </>
  );
}

export default TableProd;
