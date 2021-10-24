import express from "express";
import config from './config'
import router from './router'
import database from './database'
const app = express();


// Configure
config(app);

// ruta
router(app);
const {saleRoutes} = require('./routes');
const {salesPersonRoutes} = require('./routes');
const {productRoutes} = require('./routes');
const {userRoutes} = require('./routes');

app.use('/api/v1/sale', saleRoutes);
app.use('/api/v1/salesPerson', salesPersonRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/user', userRoutes);

//ciroac3188 replace bodyParser
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//escucha
app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://localhost:${process.env.PORT}`)
);