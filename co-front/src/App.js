<<<<<<< HEAD
import "./App.css";
=======
import "./App.scss";
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4
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

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 36f64b97bf7904ce911bd2a831973676187ce7c4
