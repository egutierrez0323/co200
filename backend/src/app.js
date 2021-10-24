import express from "express";
import config from './config'
import router from './router'
import database from './database'
const app = express();


// Configure
config(app);

// ruta
router(app);
/*const {productRoutes} = require('./routes');
app.use('/api/v1/product', productRoutes);
*/
//ciroac3188 replace bodyParser
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//escucha
app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://localhost:${process.env.PORT}`)
);