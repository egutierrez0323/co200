import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from 'axios';
import DefaultTable from '../../components/defaultTable/defaultable';
import DefaultButtom from '../../components/defaultButton/defaultButtom';
import ModalcreateUser from '../../components/modal/modalcreateuser'

/*const datostemp = [
  {
    "_id": "61759320ab520d9b49aa7972",
    "nombre": "Jusn Troconis",
    "telefono": "3105249121",
    "email": "jatroconis@gmail.com",
    "rol": "admin",
    "estado": "activo",
    "__v": 0
  }
]*/

const dataMenus = [
  {
    "id": 1,
    "col": "ID"
  },
  {
    "id": 2,
    "col": "DESCRIPCION"
  },
  {
    "id": 3,
    "col": "VALOR U"
  },
  {
    "id": 4,
    "col": "ESTADO"
  },
  {
    "id": 4,
    "col": "ACTIONS"
  }
]

const GestionProductos = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([]);


  async function registerData(data) {
    const response = await axios.post("http://localhost:3010/api/v1/product/add", data);
    if (response.status === 201) {
      listarData();
    }
  }

  async function getProduct(product) {
    registerData(product);
    handleClose();
  }

  async function listarData() {
    try {
      const response = await axios.get("http://localhost:3010/api/v1/product/list");
      if (response.status === 200) {
        const data = response.data;
        setProducts(data)
        console.log(data);

      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    listarData();
  }, []);


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Gestion de Productos</CardTitle>
                <p className="card-category">
                  Aqui podras crear tus productos{" "}
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h6">Fomulario de productos</CardTitle>
                        <div>
                          <DefaultButtom typebuttom={1} text={"Registrar Usuario"} onClick={handleShow} />
                          <ModalcreateUser show={show} handleClose={handleClose} onSend={getProduct} />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <DefaultTable data={products} dataMenus={dataMenus} option={2} /> {/* TABLA DE GESTION DE USUARIOS*/}
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
  );
}

export default GestionProductos;
