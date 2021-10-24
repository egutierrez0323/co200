const cors = require('cors');
require('dotenv').config();
// ciroac3188 deprecated -> import bodyParser from 'body-parser';
// ciroac3188 import morgan from 'morgan';

export default (app) => {
  app.disable('x-powered-by');  

  /* ciroac3188 deprecated -> app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));*/
  app.use(cors());
  // ciroac3188 app.use(morgan("dev"));

}