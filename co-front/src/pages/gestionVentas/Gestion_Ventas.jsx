import { Card, CardHeader, CardBody, CardTitle, Row, Col} from "reactstrap";
import DefaultTable from '../../components/defaultTable/defaultable';


const Ventas = () => {

const data = [
    {
        "id"  : 1,
        "col" : "ID"
    },
    {
        "id" : 2,
        "col" : "IDEN"
    },
    {
        "id" : 3,
        "col" : "NOMBRE"
    },
    {
        "id" : 4,
        "col": "FECHA-FAC"
    },
    {
        "id" : 5,
        "col": "FECHA-PAG"
    },
    {
        "id" : 6,
        "col": "VENDEDOR"
    },
    {
        "id" : 7,
        "col": "ESTADO"
    },
    {
        "id" : 8,
        "col" : "ACTIONS"
    }
];

const rows = [
    {id: 1, a:"123", b: "Paula Alejandra Saavedra", c: "2021/10/24", d: "2021/10/24", e: "Seller", f: "Autorizado"},
    {id: 2, a:"122", b: "Alejandra Saavedra", c: "2021/10/24", d: "2021/10/24", e: "Seller", f: "Autorizado"},
    {id: 3, a:"124", b: "Paula Saavedra", c: "2021/10/24", d: "2021/10/24", e: "Seller", f: "Autorizado"}

];


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Gestion de Ventas</CardTitle>
                                <p className="card-category">
                                Listado de Ventas{" "}
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
                                                <DefaultTable data={data} rows={rows}/> TABLA DE GESTION DE USUARIOS
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

export default Ventas


//const GestionUsuarios = () => {
