import { Link } from "react-router-dom";

function Aside() {
  return (
    <div className="sidebar" data-color="black" data-active-color="react">
      <div className="logo">
        <a
          href="/"
          className="simple-text logo-mini"
        >
          <div className="logo-image-small">
            <i className="fab fa-react fa-2x"></i>
          </div>
        </a>
        <a href="" className="simple-text logo-normal">
          App Ventas co200
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <Link to="/home">
              <i className="fas fa-home"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/ventas">
              <i className="fab fa-accessible-icon"></i>
              <p>Gestion Ventas</p>
            </Link>
          </li>
          <li>
            <Link to="/productos">
              <i className="fas fa-boxes"></i>
              <p>Gestion Productos</p>
            </Link>
          </li>
          <li>
            <Link to="./usuarios">
              <i className="fas fa-user-cog"></i>
              <p>Gestion Usuarios</p>
            </Link>
          </li>
          <li>
            <a href="./user.html">
              <i className="far fa-user"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
