import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "../pages/home/Home.js";
import Ventas from "../pages/gestionVentas/Gestion_Ventas.js";
import Productos from "../pages/gestionProductos/GestionProductos.js";
import Usuarios from "../pages/gestionUsuarios/GestionUsuarios.jsx";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
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
  );
}

export default Routes;
