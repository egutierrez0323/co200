import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Home from "../../pages/home/Home";
import Ventas from "../../pages/gestionVentas/Gestion_Ventas";
import Productos from "../../pages/gestionProductos/GestionProductos";
import Usuarios from "../../pages/gestionUsuarios/GestionUsuarios";
import { Switch, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <Aside />
      <div className="main-panel">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/ventas">
              <Ventas />
            </Route>
            <Route path="/productos">
              <Productos />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout();
