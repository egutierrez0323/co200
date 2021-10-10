import { Route, Switch, useLocation } from "react-router";
import Sidebar from '../layouts/Sidebar';
import Dashboard from '../pages/Dashboard';
import Productos from '../pages/Productos';
import Ventas from '../pages/Ventas';
import Usuarios from '../pages/Usuarios';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App () {
  const location = useLocation();
  return (
    <>
      <Sidebar/>
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/Dashboard"component={Dashboard}/>
            <Route exact path="/Productos"component={Productos}/>
            <Route exact path="/Ventas"component={Ventas}/>
            <Route exact path="/Usuarios"component={Usuarios}/>
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
