<<<<<<< HEAD
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
=======
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Login from "../components/Login/Login";
import Home from "../pages/home/Home";
import Ventas from "../pages/gestionVentas/Gestion_Ventas";
import Productos from "../pages/gestionProductos/GestionProductos";
import Usuarios from "../pages/gestionUsuarios/GestionUsuarios";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="" />
          <Login/>
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
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4
