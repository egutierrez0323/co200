import "./App.scss";
import Aside from "./components/aside/Aside.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Routes from "./routes/Routes.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <container>
      <div className="wrapper">
      <Router>
        <Aside />
        <div className="main-panel">
          <Header />
          <div className="content">
            <Routes />
          </div>
          <Footer />
        </div>
      </Router>
      </div>
    </container>
  );
}

export default App;