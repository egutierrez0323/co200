import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://github.com/egutierrez0323/co200" target="_blank">
                  Equipo 13 MisionTic 2022 
                </a>
              </li>
              <li>
                <a href="https://lms.misiontic2022udea.com/login/index.php" target="_blank">
                  UDEA.
                </a>
              </li>
              <li>
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.purina-latam.com%2Fpe%2Fpurina%2Fnota%2Fgatos%2F10-datos-curiosos-sobre-los-gatos&psig=AOvVaw21ycN3hsa3bWR7hduBDQdj&ust=1633923230752000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDV39H0vvMCFQAAAAAdAAAAABAD" target="_blank">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()}, Elaborador por co200 {""}
              <i className="fab fa-react" /> Equipo 13 co200
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
