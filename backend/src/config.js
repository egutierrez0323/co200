import cors from 'cors';
// ciroac3188 deprecated -> import bodyParser from 'body-parser';
import morgan from 'morgan';

export default (app) => {
  app.disable('x-powered-by');  

  /* ciroac3188 deprecated -> app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));*/
  app.use(cors());
  app.use(morgan("dev"));

}