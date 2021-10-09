import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/routes/App';
import { BrowserRouter } from "react-router-dom";
import "../src/assets/css/Sidebar.css"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
