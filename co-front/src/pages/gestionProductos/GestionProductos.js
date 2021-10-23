<<<<<<< HEAD
import React from "react";
// react plugin for creating notifications over the dashboard
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import TableProd from "../../components/Tablas/TablaProductos.jsx";

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
                                className="col btn btn-outline-primary wboton"
                              >
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
                        <TableProd />
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
=======
import React from "react";
// react plugin for creating notifications over the dashboard
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import TableProd from "../../components/Tablas/TablaProductos.jsx";

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
                                className="col btn btn-outline-primary wboton"
                              >
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
                        <TableProd />
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

export default Productos;
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4
