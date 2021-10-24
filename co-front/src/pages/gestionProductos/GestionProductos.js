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
