import React from "react";
// react plugin for creating notifications over the dashboard
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Productos() {
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
                          <div className="botones">
                            <div className="row">
                                  <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-3">
                                    <button
                                      title="Listar"
                                      type="button"
                                      className="col btn btn-outline-primary wboton">
                                      Listar
                                      </button>
                                  </div>
                                  <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-3">
                                    <button
                                      title="Limpiar"
                                      type="button"
                                      className="col btn btn-outline-secondary wboton"
                                    >
                                      Limpiar
                                    </button>
                                  </div>
                                  <div className="col-sm-12 col-md-2 col-lg-3 col-xl-2 mb-3">
                                    <button
                                      title="Guardar"
                                      type="button"
                                      className="btn btn-outline-success "
                                    >
                                      Guardar
                                    </button>
                                  </div>
                              </div>
                          </div>   
                      </CardHeader>
                      <CardBody>
                        <div className="row col-12">
                          <form action="" method="post">
                            <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                <label for="N_Producto">Nombre Producto:</label>
                                <input
                                  type="text"
                                  required="true"
                                  className="form-control"
                                  id="N_Producto"
                                  placeholder="Ingrese el nombre"
                                  maxlength="20"
                                />
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-9 col-xl-9 mb-3">
                                <label for="descripcion">Descripcion:</label>
                                <input
                                  type="text"
                                  required="true"
                                  className="form-control"
                                  id="descripcion"
                                  placeholder="Ingrese la Descripcion"
                                  maxlength="200"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                                <label for="Cat_Producto">
                                  Categoria Producto:
                                </label>
                                <select
                                  className="form-select"
                                  id="Cat_Producto"
                                  aria-label="Default select example"
                                >
                                  <option selected>
                                    Seleccione la Cateroria
                                  </option>
                                  <option value="1">Hogar</option>
                                  <option value="2">Tecnologia</option>
                                  <option value="3">Jugueteria</option>
                                  <option value="4">Herramientas</option>
                                  <option value="5">Consumibles</option>
                                  <option value="6">Vehiculos</option>
                                </select>
                              </div>

                              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                                <label for="Existencias">
                                  Cantidad de Existencias:
                                </label>
                                <input
                                  type="number"
                                  required="true"
                                  className="form-control"
                                  id="Existencias"
                                  placeholder="Cantidad Existencias"
                                  maxlength="10"
                                  min="0"
                                  max="50"
                                />
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3">
                                <label for="Val_Unitario">
                                  Valor Unitario:
                                </label>
                                <div className="input-group mb-3">
                                  <span className="input-group-text">$</span>
                                  <input
                                    type="number"
                                    min="0"
                                    max="1000000"
                                    required="true"
                                    className="form-control"
                                    id="Val_Unitario"
                                  />
                                  <span className="input-group-text">.00</span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-9 mb-3">
                                <label for="Description"># Detalle:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="Description"
                                  placeholder="Ingrese una descripcion para la venta"
                                  maxlength="100"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  {/* <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Notification states</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <UncontrolledAlert color="primary" fade={false}>
                          <span>
                            <b>Primary - </b>
                            This is a regular notification made with
                            color="primary"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>
                            <b>Info - </b>
                            This is a regular notification made with
                            color="info"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="success" fade={false}>
                          <span>
                            <b>Success - </b>
                            This is a regular notification made with
                            color="success"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" fade={false}>
                          <span>
                            <b>Warning - </b>
                            This is a regular notification made with
                            color="warning"
                          </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="danger" fade={false}>
                          <span>
                            <b>Danger - </b>
                            This is a regular notification made with
                            color="danger"
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">Notifications Places</CardTitle>
                      <p className="category">Click to view notifications</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Productos;
